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
     * Var that holds the cart notice
     *
     * @since    1.0.0
     * @var      string  $notice   Notice
     */
    public  $notifications = null ;
    protected  $last_added_product_id = null ;
    protected  $triger_type ;
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
    
    public function cart_fragments( $fragments )
    {
        $add_to_cart = !empty($_GET['wc-ajax']) && 'add_to_cart' === $_GET['wc-ajax'];
        // phpcs:ignore WordPress.Security.NonceVerification
        $request_type = ( !empty($_POST['request_type']) ? filter_var( wp_unslash( $_POST['request_type'] ), FILTER_SANITIZE_STRING ) : null );
        // phpcs:ignore WordPress.Security.NonceVerification
        $product_id = ( !empty($_POST['product_id']) ? intval( $_POST['product_id'] ) : null );
        // phpcs:ignore WordPress.Security.NonceVerification
        $coupons = WC()->cart->get_applied_coupons();
        $cart_count = WC()->cart->get_cart_contents_count();
        $buffer_output = true;
        // Set cart constants.
        cpops_frontend_helper()->set_cart_constant();
        // Calculate cart totals.
        WC()->cart->calculate_totals();
        // Handle notices.
        
        if ( !in_array( $request_type, array( 'refresh_cart' ), true ) ) {
            $notice = $this->get_notifications();
            if ( !empty($notice) ) {
                $fragments['div.cpops-drawer-notices-wrapper'] = '<div class="cpops-drawer-notices-wrapper">' . $notice . '</div>';
            }
        }
        
        // Floating Cart Launcher icon count.
        $fragments['.cpops-floating-cart__count'] = '<div class="cpops-floating-cart__count"><span>' . $cart_count . '</span></div>';
        // Update cart totals.
        ob_start();
        $this->templates->render_cart_totals();
        $cart_totals = ob_get_clean();
        $fragments['div.cpops-cart-total'] = $cart_totals;
        // Coupon apply and remove.
        
        if ( in_array( $request_type, array( 'apply_coupon', 'remove_coupon' ), true ) ) {
            ob_start();
            $this->templates->render_coupon_removal();
            $coupon_form = ob_get_clean();
            $fragments['div.cpops-coupon-remove'] = '<div class="cpops-coupon-remove">' . $coupon_form . '</div>';
        }
        
        // Drawer recommendations.
        ob_start();
        $this->templates->render_drawer_recommendations();
        $recommendations = ob_get_clean();
        $fragments['.cpops-drawer-recommendations'] = $recommendations;
        // Update cart.
        
        if ( in_array( $request_type, array( 'update_cart' ), true ) ) {
            foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
                $product = cpops_frontend_helper()->cart_item_product( $cart_item, $cart_item_key );
                
                if ( $product && $product->exists() && $cart_item['quantity'] > 0 && apply_filters(
                    'woocommerce_widget_cart_item_visible',
                    true,
                    $cart_item,
                    $cart_item_key
                ) ) {
                    $fragments['div.cpops-cart-item[data-key="' . $cart_item_key . '"] .cpops-cart-item__actions--pricing'] = $this->templates->render_price( array(
                        'cart_item_key' => $cart_item_key,
                        'cart_item'     => $cart_item,
                        'product'       => $product,
                    ), $buffer_output );
                    $fragments['div.cpops-cart-item[data-key="' . $cart_item_key . '"] .cpops-cart-item__quantity-selector'] = $this->templates->render_quantity_selectors( array(
                        'input_value'   => $cart_item['quantity'],
                        'quantity'      => $cart_item['quantity'],
                        'max_value'     => $product->get_max_purchase_quantity(),
                        'min_value'     => $product->get_min_purchase_quantity(),
                        'product_name'  => cpops_frontend_helper()->get_product_name( $cart_item, $cart_item_key ),
                        'cart_item_key' => $cart_item_key,
                    ), $product, $buffer_output );
                }
            
            }
        } else {
            // Add to cart, remove product updates.
            ob_start();
            $this->templates->render_cart_contents();
            $product_added_screen = ob_get_clean();
            $fragments['.cpops-drawer-cart'] = '<div class="cpops-drawer-cart">' . $product_added_screen . '</div>';
        }
        
        return $fragments;
    }
    
    /**
     * Set a notification for rendering in HTML.
     *
     * @param string $notice
     * @param string $type
     * @author Chris Jayden <help@cartpops.com>
     */
    public function set_notification( $notice, $type = 'info' )
    {
        $this->notifications = '<div class="cpops-notification cpops-has-shadow cpops-is-light cpops-is-' . esc_attr( $type ) . '" data-type="' . esc_attr( $type ) . '">' . $notice . '</div>';
    }
    
    /**
     * Get all notifications.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function get_notifications()
    {
        if ( empty($this->notifications) ) {
            return null;
        }
        $notification = $this->notifications;
        $notification = apply_filters( 'cartpops_drawer_notice_html', $notification );
        $this->notifications = '';
        return $notification;
    }
    
    /**
     * Refresh the cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function refresh_cart()
    {
        ob_start();
        $data = apply_filters( 'cartpops_ajax_fragments', array() );
        wp_send_json( $data );
    }
    
    /**
     * AJAX: Add a product to the cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function add_to_cart()
    {
        cpops_frontend_helper()->set_cart_constant();
        $security_check = isset( $_POST['add-to-cart'] );
        // phpcs:ignore WordPress.Security.NonceVerification
        $product_id = ( !empty($_POST['product_id']) ? intval( $_POST['product_id'] ) : '' );
        // phpcs:ignore WordPress.Security.NonceVerification
        $add_to_cart = ( !empty($_POST['add-to-cart']) ? intval( $_POST['add-to-cart'] ) : '' );
        // phpcs:ignore WordPress.Security.NonceVerification
        if ( !$security_check ) {
            wp_send_json_error( esc_html__( 'Something went wrong, please reload the page.', 'cartpops' ), 403 );
        }
        if ( empty(wc_get_notices( 'error' )) ) {
            do_action( 'woocommerce_ajax_added_to_cart', $add_to_cart );
        }
        $product = ( !empty($product_id) ? wc_get_product( $product_id ) : '' );
        
        if ( $product ) {
            /* translators: %s: product name */
            $this->set_notification( sprintf( __( '"%s" has been added to the cart.', 'cartpops' ), $product->get_name() ), 'success' );
        } else {
            $this->set_notification( __( 'Added to the cart successfully.', 'cartpops' ), 'success' );
        }
        
        wc_clear_notices();
        $this->get_refreshed_fragments();
        wp_die();
    }
    
    /**
     * AJAX: Remove a product from the cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function remove_product()
    {
        cpops_frontend_helper()->set_cart_constant();
        $cart_item_key = ( !empty($_POST['cart_key']) ? filter_var( wp_unslash( $_POST['cart_key'] ), FILTER_SANITIZE_STRING ) : null );
        // phpcs:ignore WordPress.Security.NonceVerification
        $cart_item = WC()->cart->get_cart_item( $cart_item_key );
        
        if ( $cart_item ) {
            WC()->cart->remove_cart_item( $cart_item_key );
            $product = wc_get_product( $cart_item['product_id'] );
            /* translators: %s: Item name. */
            $item_removed_title = apply_filters( 'cartpops_cart_item_removed_title', ( $product ? sprintf( _x( '&ldquo;%s&rdquo;', 'Item name in quotes', 'cartpops' ), $product->get_name() ) : __( 'Item', 'cartpops' ) ), $cart_item );
            // Don't show undo link if removed item is out of stock.
            
            if ( $product && $product->is_in_stock() && $product->has_enough_stock( $cart_item['quantity'] ) ) {
                /* Translators: %s Product title. */
                $removed_notice = sprintf( __( '%s removed.', 'cartpops' ), $item_removed_title );
                $removed_notice .= ' <a href="#" data-key="' . $cart_item_key . '" class="cpops-restore-item">' . __( 'Undo?', 'cartpops' ) . '</a>';
            } else {
                /* Translators: %s Product title. */
                $removed_notice = sprintf( __( '%s removed.', 'cartpops' ), $item_removed_title );
            }
            
            WC()->session->set( 'cartpops_last_removed_item_name', $item_removed_title );
            $this->set_notification( $removed_notice, apply_filters( 'cartpops_cart_item_removed_notice_type', 'success' ) );
        }
        
        wc_clear_notices();
        $this->get_refreshed_fragments();
    }
    
    /**
     * Restore a product in the cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function restore_product()
    {
        cpops_frontend_helper()->set_cart_constant();
        $cart_item_key = ( !empty($_POST['cart_key']) ? filter_var( wp_unslash( $_POST['cart_key'] ), FILTER_SANITIZE_STRING ) : null );
        // phpcs:ignore WordPress.Security.NonceVerification
        $product_name = WC()->session->get( 'cartpops_last_removed_item_name' );
        WC()->cart->restore_cart_item( $cart_item_key );
        
        if ( $product_name ) {
            /* translators: %s: Item name. */
            $restored_notice = sprintf( __( '%s has been added back to your cart.', 'cartpops' ), $product_name );
            $this->set_notification( $restored_notice, apply_filters( 'cartpops_cart_item_removed_notice_type', 'success' ) );
        }
        
        wc_clear_notices();
        $this->get_refreshed_fragments();
        wp_die();
    }
    
    /**
     * AJAX: Update the cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function update_cart()
    {
        cpops_frontend_helper()->set_cart_constant();
        $cart_key = ( isset( $_POST['cart_key'] ) ? sanitize_text_field( wp_unslash( $_POST['cart_key'] ) ) : '' );
        // phpcs:ignore WordPress.Security.NonceVerification
        $quantity = ( isset( $_POST['quantity'] ) ? (double) $_POST['quantity'] : '' );
        // phpcs:ignore WordPress.Security.NonceVerification
        
        if ( !is_numeric( $quantity ) || $quantity < 0 || !$cart_key ) {
            wp_send_json( array(
                'error' => __( 'Did not pass security check', 'cartpops' ),
            ), 403 );
            wp_die();
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
                    $message_type = 'error';
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
            $this->set_notification( $message, $message_type );
        }
        wc_clear_notices();
        $this->get_refreshed_fragments();
        wp_die();
    }
    
    /**
     * AJAX: Apply coupon in cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function apply_coupon()
    {
        cpops_frontend_helper()->set_cart_constant();
        $coupon_code = ( isset( $_POST['coupon'] ) ? wc_format_coupon_code( wp_unslash( $_POST['coupon'] ) ) : false );
        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.NonceVerification
        
        if ( $coupon_code ) {
            
            if ( !WC()->cart->has_discount( $coupon_code ) ) {
                
                if ( WC()->cart->apply_coupon( $coupon_code ) ) {
                    $this->set_notification( esc_html__( 'Your coupon code was applied successfully.', 'cartpops' ), 'success' );
                } else {
                    $coupon = new WC_Coupon( $coupon_code );
                    $discounts = new WC_Discounts( WC()->cart );
                    $valid = $discounts->is_coupon_valid( $coupon );
                    if ( is_wp_error( $valid ) ) {
                        WC()->session->set( 'cartpops_coupon_error', $valid->get_error_message() );
                    }
                    $this->set_notification( esc_html__( 'Sorry, this coupon code is not valid!', 'cartpops' ), 'error' );
                }
            
            } else {
                $this->set_notification( esc_html__( 'Sorry, this coupon code is already applied!', 'cartpops' ), 'error' );
            }
        
        } else {
            $this->set_notification( WC_Coupon::get_generic_coupon_error( WC_Coupon::E_WC_COUPON_PLEASE_ENTER ), 'error' );
        }
        
        wc_clear_notices();
        $this->get_refreshed_fragments();
        wp_die();
    }
    
    /**
     * AJAX: Remove coupon in cart.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function remove_coupon()
    {
        cpops_frontend_helper()->set_cart_constant();
        $coupon = ( isset( $_POST['coupon'] ) ? wc_format_coupon_code( wp_unslash( $_POST['coupon'] ) ) : false );
        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.NonceVerification
        
        if ( empty($coupon) ) {
            $this->set_notification( __( 'Sorry there was a problem removing this coupon.', 'cartpops' ), 'error' );
        } else {
            WC()->cart->remove_coupon( $coupon );
            $this->set_notification( __( 'Coupon has been removed.', 'cartpops' ), 'success' );
        }
        
        wc_clear_notices();
        $this->get_refreshed_fragments();
        wp_die();
    }
    
    /**
     * Remember last position in cart.
     *
     * @param string $cart_item_key
     * @param object $cart
     * @author Chris Jayden <help@cartpops.com>
     */
    public function removed_cart_item( $cart_item_key, $cart )
    {
        $last_position = array_search( $cart_item_key, array_keys( $cart->cart_contents ), true );
        WC()->session->set( 'cartpops_drawer_item_removed_position', $last_position );
    }
    
    /**
     * Refresh WC AJAX fragments
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function get_refreshed_fragments()
    {
        WC_AJAX::get_refreshed_fragments();
    }

}