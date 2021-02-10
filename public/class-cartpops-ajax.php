<?php

/**
 * Frontend AJAX calls reside in this class.
 *
 * @link       https://cartpops.com
 * @since      1.0.0
 *
 * @package    CartPops
 * @subpackage CartPops/public
 */
class CartPops_Frontend_Ajax
{
    private  $plugin_name ;
    private  $version ;
    private  $templates ;
    /**
     * Constructor
     *
     * @param string $plugin_name The plugin name.
     * @param int    $version Current plugin version.
     * @param class  $templates Cart templates.
     */
    public function __construct( $plugin_name, $version, $templates )
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->templates = $templates;
    }
    
    /**
     * Ajax add to cart
     *
     * @return void
     */
    public function add_to_cart()
    {
        
        if ( is_user_logged_in() && isset( $_POST['nonce'] ) ) {
            $security_check = wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'cartpops' );
        } else {
            $security_check = isset( $_POST['product_id'] );
        }
        
        if ( !$security_check ) {
            wp_send_json_error( esc_html__( 'Something went wrong, please reload the page.', 'cartpops' ), 403 );
        }
        WC_AJAX::get_refreshed_fragments();
        wp_die();
    }
    
    /**
     * Refresh the cart and any popups.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function refresh_cart()
    {
        
        if ( is_user_logged_in() && isset( $_POST['nonce'] ) ) {
            $security_check = wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'cartpops' );
        } else {
            $security_check = isset( $_POST['product_id'] );
        }
        
        if ( !$security_check ) {
            wp_send_json( array(
                'error' => __( 'Did not pass security check', 'cartpops' ),
            ), 403 );
        }
        // Can be zero if action wasn't related to a product.
        $product_id = intval( $_POST['product_id'] );
        ob_start();
        $this->templates->render_drawer_inside();
        $product_added_screen = ob_get_clean();
        $data = array(
            'fragments' => apply_filters( 'woocommerce_add_to_cart_fragments', array(
            'div.cpops-panel'          => '<div class="cpops-panel">' . $product_added_screen . '</div>',
            'div.cpops-drawer-notices' => '<div class="cpops-drawer-notices">' . $this->templates->print_notices() . '</div>',
        ) ),
            'cart_hash' => apply_filters( 'woocommerce_add_to_cart_hash', ( WC()->cart->get_cart_for_session() ? md5( wp_json_encode( WC()->cart->get_cart_for_session() ) ) : '' ), WC()->cart->get_cart_for_session() ),
        );
        wp_send_json( $data );
        wp_die();
    }
    
    /**
     * Update the cart
     *
     * @return void
     */
    public function update_cart()
    {
        
        if ( is_user_logged_in() && isset( $_POST['nonce'] ) ) {
            $security_check = wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'cartpops' ) && isset( $_POST['cart_key'] );
        } else {
            $security_check = isset( $_POST['cart_key'] );
        }
        
        if ( !$security_check ) {
            wp_send_json( array(
                'error' => __( 'Did not pass security check', 'cartpops' ),
            ), 403 );
        }
        $cart_key = sanitize_text_field( wp_unslash( $_POST['cart_key'] ) );
        if ( isset( $_POST['quantity'] ) ) {
            $quantity = (double) $_POST['quantity'];
        }
        if ( !$cart_key ) {
            wp_send_json( array(
                'error' => __( 'Cart key is missing', 'cartpops' ),
            ), 403 );
        }
        if ( !is_numeric( $quantity ) || $quantity < 0 ) {
            wp_send_json( array(
                'error' => __( 'Cart quantity was not numeric', 'cartpops' ),
            ), 403 );
        }
        $message = '';
        $message_type = '';
        $removed = false;
        $in_stock = true;
        $product_qty_in_cart = WC()->cart->get_cart_item_quantities();
        $current_session_order_id = ( isset( WC()->session->order_awaiting_payment ) ? absint( WC()->session->order_awaiting_payment ) : 0 );
        foreach ( WC()->cart->get_cart() as $cart_item_key => $values ) {
            // Match target cart key  against items in cart until we find a match.
            
            if ( $cart_key === $cart_item_key ) {
                $product = $values['data'];
                // Check stock based on stock-status.
                
                if ( $product->managing_stock() && $quantity > $product->get_stock_quantity() ) {
                    $in_stock = false;
                    /* translators: %s: product name */
                    $message = sprintf( __( 'Sorry, "%s" is not in stock. Please edit your cart and try again. We apologize for any inconvenience caused.', 'cartpops' ), $product->get_name() );
                    $message_type = 'success';
                }
                
                // We only need to check products managing stock, with a limited stock qty.
                
                if ( !$product->managing_stock() || $product->backorders_allowed() ) {
                    $in_stock = true;
                    /* translators: %s: product name */
                    $message = sprintf( __( '"%s" has been updated.', 'cartpops' ), $product->get_name() );
                    $message_type = 'success';
                }
                
                // Check stock based on all items in the cart and consider any held stock within pending orders.
                $held_stock = wc_get_held_stock_quantity( $product, $current_session_order_id );
                $required_stock = $product_qty_in_cart[$product->get_stock_managed_by_id()];
                /**
                 * Allows filter if product have enough stock to get added to the cart.
                 *
                 * @since 4.6.0
                 * @param bool       $has_stock If have enough stock.
                 * @param WC_Product $product   Product instance.
                 * @param array      $values    Cart item values.
                 */
                
                if ( $product->managing_stock() && !$product->backorders_allowed() && $product->get_stock_quantity() < $held_stock + $required_stock ) {
                    $in_stock = false;
                    /* translators: 1: product name 2: quantity in stock */
                    $message = sprintf( __( 'Sorry, we do not have enough "%1$s" in stock to fulfill your order (%2$s available). We apologize for any inconvenience caused.', 'cartpops' ), $product->get_name(), wc_format_stock_quantity_for_display( $product->get_stock_quantity() - $held_stock, $product ) );
                    $message_type = 'error';
                }
                
                // 0 quantity means that item is being removed.
                
                if ( 0 === (int) $quantity ) {
                    $removed = true;
                    /* translators: %s: product name */
                    $message = sprintf( __( '"%s" was removed from your cart', 'cartpops' ), $product->get_name() );
                    $message_type = 'success';
                }
                
                break;
            }
        
        }
        
        if ( $in_stock ) {
            $action = WC()->cart->set_quantity( $cart_key, $quantity );
        } elseif ( $removed ) {
            $action = WC()->cart->remove_cart_item( $cart_key );
        }
        
        if ( $message && $message_type ) {
            wc_add_notice( $message, $message_type );
        }
        WC_AJAX::get_refreshed_fragments();
        wc_clear_notices();
        wp_die();
    }
    
    /**
     * AJAX apply coupon on caret
     *
     * @return void
     */
    public function apply_coupon()
    {
        
        if ( is_user_logged_in() && isset( $_POST['nonce'] ) ) {
            $security_check = wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'cartpops' ) && isset( $_POST['coupon'] );
        } else {
            $security_check = isset( $_POST['coupon'] );
        }
        
        if ( !$security_check ) {
            wp_send_json( array(
                'error' => __( 'Did not pass security check', 'cartpops' ),
            ), 403 );
        }
        
        if ( isset( $_POST['coupon'] ) ) {
            WC()->cart->add_discount( wc_format_coupon_code( wp_unslash( $_POST['coupon'] ) ) );
            // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        } else {
            wc_add_notice( WC_Coupon::get_generic_coupon_error( WC_Coupon::E_WC_COUPON_PLEASE_ENTER ), 'error' );
        }
        
        WC_AJAX::get_refreshed_fragments();
        wc_clear_notices();
        wp_die();
    }
    
    /**
     * AJAX remove coupon on cart
     */
    public function remove_coupon()
    {
        
        if ( is_user_logged_in() && isset( $_POST['nonce'] ) ) {
            $security_check = wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'cartpops' ) && isset( $_POST['coupon'] );
        } else {
            $security_check = isset( $_POST['coupon'] );
        }
        
        if ( !$security_check ) {
            wp_send_json( array(
                'error' => __( 'Did not pass security check', 'cartpops' ),
            ), 403 );
        }
        $coupon = ( isset( $_POST['coupon'] ) ? wc_format_coupon_code( wp_unslash( $_POST['coupon'] ) ) : false );
        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        
        if ( empty($coupon) ) {
            wc_add_notice( __( 'Sorry there was a problem removing this coupon.', 'cartpops' ), 'error' );
        } else {
            WC()->cart->remove_coupon( $coupon );
            wc_add_notice( __( 'Coupon has been removed.', 'cartpops' ) );
        }
        
        WC_AJAX::get_refreshed_fragments();
        wc_clear_notices();
        wp_die();
    }

}