<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://cartpops.com
 * @since      1.0.0
 *
 * @package    CartPops
 * @subpackage CartPops/public
 */
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    CartPops
 * @subpackage CartPops/public
 * @author     Chris Jayden <support@cartpops.com>
 */
class CartPops_Public
{
    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_name    The ID of this plugin.
     */
    private  $plugin_name ;
    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */
    private  $version ;
    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @param      string    $plugin_name       The name of the plugin.
     * @param      string    $version    The version of this plugin.
     * @var        int
     */
    public static  $animation_counter = 0 ;
    /**
     * Animation type.
     *
     * @param string $animation_type The type of animation that's active
     */
    public  $animation_type ;
    /**
     * Trigger.
     *
     * @param string $trigger The alt trigger for add to cart.
     */
    public  $trigger ;
    /**
     * Set options.
     */
    private  $checkout_button_text ;
    private  $checkout_button_empty_text ;
    private  $drawer_empty_title ;
    private  $drawer_empty_subtitle ;
    private  $product_recommendation_engine_text ;
    private  $coupon_form_enabled ;
    private  $assistant_enabled ;
    private  $assistant_coupon_form ;
    /**
     * Constructor
     *
     * @param string $plugin_name The plugin name.
     * @param int    $version Current plugin version.
     * @param object $plugin_settings instance of the plugin options.
     */
    public function __construct( $plugin_name, $version, $plugin_settings )
    {
        self::$animation_counter = 0;
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->trigger = cartpops_get_option( 'add_to_cart_trigger' );
        $this->animation_type = cartpops_get_option( 'animation_type' );
        $this->plugin_settings = $plugin_settings;
        $this->checkout_button_text = cartpops_get_option( 'checkout_button_text' );
        $this->checkout_button_empty_text = cartpops_get_option( 'checkout_button_empty_text' );
        $this->drawer_empty_title = cartpops_get_option( 'drawer_empty_title_text' );
        $this->drawer_empty_subtitle = cartpops_get_option( 'drawer_empty_subtitle_text' );
        $this->product_recommendation_engine_text = cartpops_get_option( 'product_recommendation_engine_text' );
        $this->continue_shopping_text = cartpops_get_option( 'continue_shopping_text' );
        $this->coupon_form_enabled = cartpops_get_option( 'coupon_form_enable' );
    }
    
    /**
     * Enqueue styles
     *
     * @return void
     */
    public function enqueue_styles()
    {
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $custom_css = cartpops_get_option( 'custom_css' );
        wp_enqueue_style(
            'cartpops-frontend',
            CARTPOPS_URL . 'assets/css/frontend' . $suffix . '.css',
            array(),
            $this->version,
            'all'
        );
        wp_enqueue_style(
            $this->plugin_name . '-swiper',
            CARTPOPS_URL . 'assets/lib/swiper/swiper-bundle' . $suffix . '.css',
            array(),
            $this->version,
            'all'
        );
        if ( $custom_css ) {
            wp_add_inline_style( 'cartpops-frontend', wp_unslash( $custom_css ) );
        }
    }
    
    /**
     * Enqueue scripts
     *
     * @return void
     */
    public function enqueue_scripts()
    {
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $custom_js = cartpops_get_option( 'custom_js' );
        wp_enqueue_script(
            'cartpops-frontend',
            CARTPOPS_URL . 'assets/js/frontend' . $suffix . '.js',
            array( 'jquery' ),
            $this->version,
            true
        );
        wp_enqueue_script(
            $this->plugin_name . '-swiper',
            CARTPOPS_URL . 'assets/lib/swiper/swiper-bundle' . $suffix . '.js',
            array(),
            $this->version,
            true
        );
        wp_localize_script( 'cartpops-frontend', 'cpops_config', array(
            'script_debug' => ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? true : false ),
            'ajax_url'     => admin_url( 'admin-ajax.php' ),
            'pro'          => json_encode( fs_cartpops()->can_use_premium_code() ),
            'nonce'        => wp_create_nonce( 'cartpops' ),
            'trigger'      => $this->trigger,
        ) );
        if ( $custom_js ) {
            wp_add_inline_script( 'cartpops-frontend', wp_unslash( $custom_js ) );
        }
    }
    
    /**
     * Maybe set a session for a customer if none is present yet.
     *
     * @author Chris Jayden <support@cartpops.com>
     */
    public function maybe_set_session()
    {
        if ( is_user_logged_in() || is_admin() ) {
            return;
        }
        if ( isset( WC()->session ) ) {
            
            if ( !WC()->session->has_session() ) {
                // phpcs:ignore
                WC()->session->set_customer_session_cookie( true );
                // phpcs:ignore
            }
        
        }
    }
    
    /**
     * Get the drawer panel
     *
     * @return void
     */
    public function render_drawer_inside()
    {
        wc_get_template(
            'drawer/cartpops-drawer-inside.php',
            array(),
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
        );
    }
    
    /**
     * Renders the drawer.
     *
     * @return void
     */
    public function render_render_drawer()
    {
        $data = array(
            'classes'    => apply_filters( 'cpops_drawer_classes', array( 'cpops-default-drawer', 'cpops-modal-wrap', "cpops-animation__{$this->animation_type}" ) ),
            'attributes' => array(
            'tabindex' => '-1',
            'role'     => 'dialog',
        ),
        );
        wc_get_template(
            'cartpops-drawer.php',
            $data,
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
        );
    }
    
    /**
     * Renders the add to cart launcher.
     *
     * @return void
     */
    public function render_floating_cart_launcher()
    {
        $enabled = cartpops_get_option( 'floating_cart_launcher_enable' );
        if ( !$enabled ) {
            return;
        }
        if ( is_cart() || is_checkout() ) {
            return;
        }
        $data = array(
            'classes' => apply_filters( 'cpops_floating_cart_launcher_classes', array( 'cpops-toggle-drawer' ) ),
        );
        wc_get_template(
            'cartpops-launcher.php',
            $data,
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
        );
    }
    
    /**
     * Load Drawer header
     *
     * @return void
     */
    public function render_drawer_header()
    {
        $title = cartpops_get_option( 'drawer_header_title_text' );
        $data = array(
            'classes' => apply_filters( 'cpops_drawer_header_classes', array( 'cpops-drawer-header__heading' ) ),
            'title'   => ( !empty($title) ? esc_html( $title ) : __( 'My cart', 'cartpops' ) ),
        );
        if ( 'slick' === $this->animation_type ) {
            $data['classes'][] = self::get_animation_class();
        }
        wc_get_template(
            'drawer/cartpops-drawer-header.php',
            $data,
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
        );
    }
    
    /**
     * Get all cart contents
     *
     * @return void
     */
    public function render_cart_contents()
    {
        $cart = WC()->cart->get_cart();
        
        if ( !empty($cart) ) {
            foreach ( $cart as $item ) {
                $product = $item['data'];
                $data = array(
                    'classes'                 => apply_filters( 'cpops_drawer_cart_item_classes', array( 'cpops-cart-item' ) ),
                    'quantity'                => $this->render_quantity_selectors( array(
                    'input_value'  => $item['quantity'],
                    'quantity'     => $item['quantity'],
                    'max_value'    => $product->get_max_purchase_quantity(),
                    'min_value'    => $product->get_min_purchase_quantity(),
                    'product_name' => $this->get_product_name( $item, $item['key'] ),
                    'cart_key'     => $item['key'],
                ), $product ),
                    'cpops_cart_item'         => $item,
                    'cpops_cart_item_key'     => $item['key'],
                    'cpops_product'           => $product,
                    'cpops_product_id'        => $item['product_id'],
                    'cpops_product_permalink' => ( $product->is_visible() ? $product->get_permalink( $item ) : '' ),
                    'cpops_thumbnail'         => $product->get_image(),
                    'cpops_product_name'      => $this->get_product_name( $item, $item['key'] ),
                    'cpops_product_price'     => WC()->cart->get_product_price( $product ),
                    'cpops_product_subtotal'  => WC()->cart->get_product_subtotal( $product, $item['quantity'] ),
                );
                if ( 'slick' === $this->animation_type ) {
                    $data['classes'][] = self::get_animation_class();
                }
                wc_get_template(
                    'drawer/cartpops-drawer-cart-item.php',
                    $data,
                    '',
                    plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
                );
            }
        } else {
            $empty_cart_image = null;
            $data = array(
                'classes'   => apply_filters( 'cpops_drawer_empty_cart_classes', array( 'cpops-empty-cart' ) ),
                'headline'  => ( !empty($this->drawer_empty_title) ? $this->drawer_empty_title : sprintf( __( 'Your cart is empty.', 'cartpops' ) ) ),
                'subheader' => ( !empty($this->drawer_empty_subtitle) ? $this->drawer_empty_subtitle : sprintf( __( 'Looks like you haven\'t made a choice yet.', 'cartpops' ) ) ),
            );
            if ( 'slick' === $this->animation_type ) {
                $data['classes'][] = self::get_animation_class();
            }
            wc_get_template(
                'drawer/cartpops-drawer-empty-state.php',
                $data,
                '',
                plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
            );
        }
    
    }
    
    /**
     * Output the quantity input for add to cart forms.
     *
     * @param  array           $args Args for the input.
     * @param  WC_Product|null $product Product.
     * @param  boolean         $echo Whether to return or echo|string.
     *
     * @return string
     */
    public function render_quantity_selectors( $data = array(), $product = null, $echo = false )
    {
        $quantity_enabled = true;
        if ( is_null( $product ) ) {
            return;
        }
        if ( !$quantity_enabled ) {
            return;
        }
        if ( $product->is_sold_individually() ) {
            return;
        }
        $defaults = array(
            'input_id'     => uniqid( 'quantity_' ),
            'input_name'   => 'quantity',
            'input_value'  => '1',
            'classes'      => apply_filters( 'woocommerce_quantity_input_classes', array( 'input-text', 'qty', 'text' ), $product ),
            'max_value'    => apply_filters( 'woocommerce_quantity_input_max', -1, $product ),
            'min_value'    => apply_filters( 'woocommerce_quantity_input_min', 0, $product ),
            'step'         => apply_filters( 'woocommerce_quantity_input_step', 1, $product ),
            'pattern'      => apply_filters( 'woocommerce_quantity_input_pattern', ( has_filter( 'woocommerce_stock_amount', 'intval' ) ? '[0-9]*' : '' ) ),
            'inputmode'    => apply_filters( 'woocommerce_quantity_input_inputmode', ( has_filter( 'woocommerce_stock_amount', 'intval' ) ? 'numeric' : '' ) ),
            'product_name' => ( $product ? $product->get_title() : '' ),
            'placeholder'  => apply_filters( 'woocommerce_quantity_input_placeholder', '', $product ),
            'cart_key'     => '',
        );
        $data = apply_filters( 'woocommerce_quantity_input_args', wp_parse_args( $data, $defaults ), $product );
        // Apply sanity to min/max args - min cannot be lower than 0.
        $data['min_value'] = max( $data['min_value'], 0 );
        $data['max_value'] = ( 0 < $data['max_value'] ? $data['max_value'] : '' );
        // Max cannot be lower than min if defined.
        if ( '' !== $data['max_value'] && $data['max_value'] < $data['min_value'] ) {
            $data['max_value'] = $data['min_value'];
        }
        ob_start();
        wc_get_template(
            'cartpops-quantity-selectors.php',
            $data,
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/partials/'
        );
        
        if ( $echo ) {
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            echo  ob_get_clean() ;
        } else {
            return ob_get_clean();
        }
    
    }
    
    /**
     * Renders the coupon form partial.
     *
     * @return void
     */
    public function render_coupon_form()
    {
        
        if ( $this->coupon_form_enabled && wc_coupons_enabled() ) {
            $title = cartpops_get_option( 'coupon_title_text' );
            $placeholder_text = cartpops_get_option( 'coupon_input_placeholder_text' );
            $button_text = cartpops_get_option( 'coupon_button_text' );
            $coupons = WC()->cart->get_applied_coupons();
            if ( $coupons ) {
                foreach ( $coupons as $coupon ) {
                    $coupon = new WC_Coupon( $coupon );
                }
            }
            $data = array(
                'classes'          => apply_filters( 'cpops_drawer_coupon_form_classes', array( 'cpops-drawer-coupon' ) ),
                'active_coupon'    => WC()->cart->get_applied_coupons(),
                'currency_symbol'  => get_woocommerce_currency_symbol(),
                'cpops_coupon'     => ( !empty($coupon) ? $coupon->get_code() : '' ),
                'title'            => ( !empty($title) ? $title : __( 'Got a discount code?', 'cartpops' ) ),
                'placeholder_text' => ( !empty($placeholder_text) ? $placeholder_text : __( 'Enter discount code', 'cartpops' ) ),
                'button_text'      => ( !empty($button_text) ? $button_text : __( 'Apply', 'cartpops' ) ),
            );
            if ( 'slick' === $this->animation_type ) {
                $data['classes'][] = self::get_animation_class();
            }
            wc_get_template(
                'drawer/cartpops-drawer-coupon-form.php',
                $data,
                '',
                plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
            );
        }
    
    }
    
    /**
     * Renders the coupon removal partial.
     *
     * @return void
     */
    public function render_coupon_removal()
    {
        $coupons = WC()->cart->get_applied_coupons();
        
        if ( $coupons ) {
            $html = '';
            foreach ( $coupons as $coupon ) {
                $coupon = new WC_Coupon( $coupon );
                $code = $coupon->get_code();
                $coupon_data = $coupon->get_data();
                $discount_amount = $coupon_data['amount'];
                $discount_type = $coupon_data['discount_type'];
                $currency_symbol = get_woocommerce_currency_symbol();
                $coupon_text_price = ( 'percent' === $discount_type ? $discount_amount . '%' : $currency_symbol . $discount_amount );
                $html .= '<div class="cpops-coupons-tag">';
                $html .= sprintf(
                    '<span class="cpops-coupon-remove__item cpops-coupon-remove__item  cpops-coupon-remove__item-link">%1$s</span><a href="javascript:void(0);" class="cpops-coupon-remove__item  cpops-coupon-remove__item-delete" data-coupon="%2$s"><span class="cpops-sr-only">%3$s</span></a>',
                    /* translators: %1$s is replaced with the coupon name and %2$s with the coupon amount  */
                    sprintf( esc_html__( 'Coupon "%1$s" (%2$s)', 'cartpops' ), esc_html( $code ), esc_html( $coupon_text_price ) ),
                    esc_html( $code ),
                    esc_html__( 'Removes coupon code', 'cartpops' )
                );
                $html .= '</div>';
            }
            // We echo because we don't need a seperate file for htis.
            echo  wp_kses_post( $html ) ;
        }
    
    }
    
    /**
     * Renders the drawer recommendations partial.
     *
     * @author Chris Jayden <support@cartpops.com>
     */
    public function render_drawer_recommendations()
    {
        $products = $this->get_recommendations();
        
        if ( !empty($products) ) {
            $title = $this->product_recommendation_engine_text;
            $data = array(
                'classes'              => apply_filters( 'cpops_drawer_empty_cart_classes', array( 'cpops-drawer-recommendations' ) ),
                'title'                => ( !empty($title) ? $title : __( 'You might also like these items!', 'cartpops' ) ),
                'recommended_products' => $products,
            );
            if ( 'slick' === $this->animation_type ) {
                $data['classes'][] = self::get_animation_class();
            }
            wc_get_template(
                'drawer/cartpops-drawer-recommendations.php',
                $data,
                '',
                plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
            );
        }
    
    }
    
    /**
     * Get an object of products to recommend based on plugin settings.
     *
     * @author Chris Jayden <support@cartpops.com>
     * @return object $products An object of products.
     */
    public function get_recommendations()
    {
        $enabled = cartpops_get_option( 'product_recommendation_engine_enable' );
        if ( !$enabled ) {
            return;
        }
        $recommendation_type = cartpops_get_option( 'product_recommendation_engine_type' );
        $recommendation_fallback = cartpops_get_option( 'product_recommendation_engine_fallback' );
        $custom_products = cartpops_get_option( 'product_recommendation_engine_custom_global' );
        $title = cartpops_get_option( 'product_recommendation_engine_text' );
        $products = array();
        $current_cart_item_ids = array();
        $cart = WC()->cart->get_cart();
        $product_ids = array();
        // Current cart items.
        if ( $cart ) {
            foreach ( $cart as $cart_item ) {
                $current_cart_item_ids[] = $cart_item['product_id'];
            }
        }
        if ( 'upsells' === $recommendation_type ) {
            foreach ( $cart as $item ) {
                $_product = new WC_Product( $item['product_id'] );
                $product_ids = $_product->get_upsell_ids();
            }
        }
        if ( 'cross_sells' === $recommendation_type ) {
            foreach ( $cart as $item ) {
                $_product = new WC_Product( $item['product_id'] );
                $product_ids = $_product->get_cross_sell_ids();
            }
        }
        // Match upsells and cross-sells with current cart.
        foreach ( $product_ids as $product_id ) {
            $_product = wc_get_product( $product_id );
            $product_cart_id = WC()->cart->generate_cart_id( $product_id );
            if ( !WC()->cart->find_product_in_cart( $product_cart_id ) && $_product->is_type( 'simple' ) && $_product->is_in_stock() ) {
                $products[] = $_product;
            }
        }
        if ( empty($products) ) {
            switch ( $recommendation_fallback ) {
                case 'random_products':
                    $products = $this->get_random_recommended_products( array(), 4, $current_cart_item_ids );
                    break;
                default:
                    break;
            }
        }
        return $products;
    }
    
    /**
     * Gets the cart toals
     *
     * @return void
     */
    public function render_cart_totals()
    {
        WC()->cart->calculate_totals();
        $cart = WC()->cart->get_cart();
        $applied_coupons = WC()->cart->get_applied_coupons();
        
        if ( !empty($cart) ) {
            $button_text = ( !empty($this->checkout_button_text) ? $this->checkout_button_text : __( 'Checkout now', 'cartpops' ) );
            $url = wc_get_checkout_url();
        } else {
            $button_text = ( !empty($this->checkout_button_empty_text) ? $this->checkout_button_empty_text : __( 'Your cart is empty. Shop now', 'cartpops' ) );
            $url = get_permalink( wc_get_page_id( 'shop' ) );
        }
        
        $data = array(
            'classes'     => apply_filters( 'cpops_drawer_cart_totals_classes', array( 'cpops-cart-total' ) ),
            'subtotal'    => $this->get_cart_subtotal_order_total_html(),
            'discount'    => $this->get_cart_discount_order_total_html(),
            'total'       => $this->get_cart_totals_order_total_html(),
            'tax'         => $this->get_cart_tax_order_total_html(),
            'button_text' => $button_text,
            'url'         => $url,
        );
        if ( 'slick' === $this->animation_type ) {
            $data['classes'][] = self::get_animation_class();
        }
        wc_get_template(
            'drawer/cartpops-drawer-cart-totals.php',
            $data,
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
        );
    }
    
    /**
     * Get the cart subtotal.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function get_cart_subtotal_order_total_html()
    {
        $label_translation = cartpops_get_option( 'subtotal_line_item_text' );
        $html = '';
        $label = ( !empty($label_translation) ? $label_translation : __( 'Subtotal', 'cartpops' ) );
        $has_coupons = WC()->cart->get_cart_discount_total();
        $value = WC()->cart->get_cart_subtotal();
        if ( wc_tax_enabled() || $has_coupons ) {
            $html = $this->create_single_line_item_html(
                $label,
                apply_filters( 'cartpops_cart_totals_subtotal_total_html', $value ),
                '',
                'subtotal'
            );
        }
        return $html;
    }
    
    /**
     * Get the cart total without shipping.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function get_cart_totals_order_total_html()
    {
        $label_translation = cartpops_get_option( 'total_line_item_text' );
        $cart = WC()->cart;
        $tooltip = '';
        $label = ( !empty($label_translation) ? $label_translation : __( 'Total', 'cartpops' ) );
        $shipping = $this->get_shipping_totals();
        $shipping_total = $shipping->total;
        $shipping_tax_total = $shipping->tax_total;
        $total_without_shipping = $cart->get_total( 'number' ) - $shipping_total - $shipping_tax_total;
        $value = '<strong>' . wc_price( $total_without_shipping ) . '</strong> ';
        
        if ( wc_tax_enabled() && $cart->display_prices_including_tax() ) {
            $tax_string_array = array();
            $cart_tax_totals = $cart->get_tax_totals();
            
            if ( get_option( 'woocommerce_tax_total_display' ) === 'itemized' ) {
                foreach ( $cart_tax_totals as $code => $tax ) {
                    $tax_string_array[] = sprintf( '%s %s', wc_price( $tax->amount - $shipping_tax_total ), $tax->label );
                }
            } elseif ( !empty($cart_tax_totals) ) {
                $tax_string_array[] = sprintf( '%s %s', wc_price( $cart->get_taxes_total( true, false ) - $shipping_tax_total ), WC()->countries->tax_or_vat() );
            }
            
            
            if ( !empty($tax_string_array) ) {
                $taxable_address = WC()->customer->get_taxable_address();
                $estimated_text = ( WC()->customer->is_customer_outside_base() && !WC()->customer->has_calculated_shipping() ? sprintf( ' ' . __( 'estimated for %s', 'cartpops' ), WC()->countries->estimated_for_prefix( $taxable_address[0] ) . WC()->countries->countries[$taxable_address[0]] ) : '' );
                $value .= '<small class="includes_tax">' . sprintf( __( '(includes %s)', 'cartpops' ), implode( ', ', $tax_string_array ) . $estimated_text ) . '</small>';
            }
        
        }
        
        if ( WC()->cart->needs_shipping() && WC()->cart->show_shipping() ) {
            $tooltip = __( 'Shipping calculated at checkout', 'cartpops' );
        }
        $html = $this->create_single_line_item_html(
            $label,
            apply_filters( 'cartpops_cart_totals_order_total_html', $value ),
            $tooltip,
            'total'
        );
        return $html;
    }
    
    /**
     * Get the cart vat without shipping.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function get_cart_tax_order_total_html()
    {
        $label = '';
        $value = '';
        
        if ( wc_tax_enabled() && !WC()->cart->display_prices_including_tax() ) {
            $shipping = $this->get_shipping_totals();
            $shipping_total = $shipping->total;
            $shipping_tax_total = $shipping->tax_total;
            
            if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) {
                foreach ( WC()->cart->get_tax_totals() as $code => $tax ) {
                    $tax_excluding_shipping = $tax->amount - $shipping_tax_total;
                    $label .= 'using';
                    $label .= $tax->label;
                    $value .= wp_kses_post( wc_price( $tax_excluding_shipping ) );
                }
            } else {
                $label .= esc_html( WC()->countries->tax_or_vat() );
                $value .= wc_price( WC()->cart->get_taxes_total( false, false ) - $shipping_tax_total );
            }
        
        }
        
        $html = $this->create_single_line_item_html(
            $label,
            apply_filters( 'cartpops_cart_totals_vat_total_html', $value ),
            '',
            'tax'
        );
        return $html;
    }
    
    /**
     * Get the cart discount.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function get_cart_discount_order_total_html()
    {
        $html = '';
        $label_translation = cartpops_get_option( 'discount_line_item_text' );
        $label = ( !empty($label_translation) ? $label_translation : __( 'Discount', 'cartpops' ) );
        $discount_excl_tax_total = WC()->cart->get_cart_discount_total();
        $discount_tax_total = WC()->cart->get_cart_discount_tax_total();
        $discount_total = $discount_excl_tax_total + $discount_tax_total;
        $value = wc_price( $discount_total );
        if ( $discount_total > 0 ) {
            $html = $this->create_single_line_item_html(
                $label,
                apply_filters( 'cartpops_cart_totals_discount_total_html', $value ),
                '',
                'discount'
            );
        }
        return $html;
    }
    
    /**
     * Get shipping information.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function get_shipping_totals()
    {
        $cart = WC()->cart;
        $shipping = array(
            'total'     => (double) $cart->get_shipping_total(),
            'tax_total' => (double) $cart->shipping_tax_total,
        );
        return (object) $shipping;
    }
    
    /**
     * Creates a single line item.
     *
     * @param string $label A html string for the label.
     * @param string $value A html string for the value.
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function create_single_line_item_html(
        $label,
        $value,
        $tooltip,
        $type = 'item'
    )
    {
        $html = '';
        $classes = apply_filters( 'cpops_line_item_classes', array( 'cpops-cart-line-items__' . $type ) );
        $html .= '<div class="' . esc_html( implode( ' ', array_filter( $classes ) ) ) . '">';
        $html .= '<span>' . $label;
        
        if ( $tooltip ) {
            $html .= '<div class="cpops-tooltip">';
            $html .= '<i class="cpops-tooltip__icon">?</i>';
            $html .= '<div class="cpops-tooltip__info">';
            $html .= '<span>' . $tooltip . '</span>';
            $html .= '</div>';
            $html .= '</div>';
            $html .= '<span class="cpops-sr-only">' . $tooltip . '</span>';
        }
        
        $html .= '</span>';
        $html .= '<span>' . $value . '</span>';
        $html .= '</div>';
        return $html;
    }
    
    /**
     * Renders the powered by partial.
     *
     * @author Chris Jayden <support@cartpops.com>
     */
    public function render_powered_by()
    {
        $enabled = cartpops_get_option( 'support_us_enable' );
        if ( !$enabled ) {
            return;
        }
        $affiliate_url = cartpops_get_option( 'support_us_partner_code' );
        $url = cartpops_outbound_url(
            '',
            'Add To Cart Trigger',
            'Powered By',
            'Site'
        );
        if ( $affiliate_url ) {
            $url = "https://r.freemius.com/7061/{$affiliate_url}/";
        }
        $data = array(
            'classes' => apply_filters( 'cpops_powered_by_classes', array( 'cpops-powered-by' ) ),
            'url'     => esc_url( $url ),
        );
        if ( 'slick' === $this->animation_type ) {
            $data['classes'][] = self::get_animation_class();
        }
        wc_get_template(
            'cartpops-powered-by.php',
            $data,
            '',
            plugin_dir_path( dirname( __FILE__ ) ) . 'templates/partials/'
        );
    }
    
    /**
     * Get an array of recommended products
     *
     * @param array   $products Array of products.
     * @param integer $count Count of products to get.
     * @param array   $excludes Any products that should be excluded.
     * @author Chris Jayden <support@cartpops.com>
     */
    private function get_random_recommended_products( $products = array(), $count = 4, $excludes = array() )
    {
        $products_temp = $products;
        $args = array(
            'posts_per_page' => $count,
            'orderby'        => 'rand',
            'post_type'      => 'product',
        );
        $random_products = get_posts( $args );
        // We need at least 4 products for random products.
        foreach ( $random_products as $prod ) {
            
            if ( !in_array( $prod->ID, $excludes, true ) ) {
                $prod_ = wc_get_product( $prod->ID );
                $product_cart_id = WC()->cart->generate_cart_id( $prod->ID );
                if ( !WC()->cart->find_product_in_cart( $product_cart_id ) && count( $products_temp ) < $count && $prod_->is_type( 'simple' ) && $prod_->is_in_stock() ) {
                    $products_temp[] = $prod_;
                }
                $excludes[] = $prod->ID;
            }
        
        }
        return $products_temp;
    }
    
    /**
     * Ajax add to cart
     *
     * @return void
     */
    public function cpops_add_to_cart()
    {
        if ( isset( $_POST['nonce'] ) ) {
            $security_check = wp_verify_nonce( sanitize_key( $_POST['nonce'] ), 'cartpops' );
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
     * @author Chris Jayden <support@cartpops.com>
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
        $this->render_drawer_inside();
        $product_added_screen = ob_get_clean();
        $data = array(
            'fragments' => apply_filters( 'woocommerce_add_to_cart_fragments', array(
            'div.cpops-panel'          => '<div class="cpops-panel">' . $product_added_screen . '</div>',
            'div.cpops-drawer-notices' => '<div class="cpops-drawer-notices">' . $this->print_notices() . '</div>',
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
    
    /**
     * Renders the WooCommerce notices partial.
     *
     * @author Chris Jayden <support@cartpops.com>
     */
    public function render_wc_notices()
    {
        $html = '<div class="cpops-drawer-notices"></div>';
        echo  wp_kses( apply_filters( 'cartpops_notices_html', $html ), apply_filters( 'cartpops_kses_notice_allowed_tags', wp_kses_allowed_html( 'post' ) ) ) ;
    }
    
    /**
     * Custom notices wrapper
     *
     * @return string
     */
    public function print_notices()
    {
        $all_notices = WC()->session->get( 'wc_notices', array() );
        $notice_types = apply_filters( 'woocommerce_notice_types', array( 'error', 'success', 'notice' ) );
        // phpcs:ignore
        // Buffer output.
        ob_start();
        foreach ( $notice_types as $notice_type ) {
            
            if ( wc_notice_count( $notice_type ) > 0 ) {
                $messages = array();
                $data = array(
                    'classes'  => apply_filters( 'cpops_notices_classes', array( 'cpops-default-drawer', 'cpops-modal-wrap' ) ),
                    'messages' => array_filter( $messages ),
                    'notices'  => array_filter( $all_notices[$notice_type] ),
                );
                if ( 'slick' === $this->animation_type ) {
                    $data['classes'][] = 'cpops-animation__slick-delay-1';
                }
                foreach ( $all_notices[$notice_type] as $notice ) {
                    $messages[] = ( isset( $notice['notice'] ) ? $notice['notice'] : $notice );
                }
                wc_get_template(
                    "info/{$notice_type}.php",
                    $data,
                    '',
                    plugin_dir_path( dirname( __FILE__ ) ) . 'templates/'
                );
            }
        
        }
        wc_clear_notices();
        $notices = wc_kses_notice( ob_get_clean() );
        return $notices;
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
    }
    
    /**
     * Helper fuction to get the product name.
     *
     * @param object $cart_item Single cart item.
     * @param string $cart_item_key Single cart key.
     * @return string
     */
    public function get_product_name( $cart_item, $cart_item_key )
    {
        $_product = apply_filters(
            'cartpops_cart_item_product',
            $cart_item['data'],
            $cart_item,
            $cart_item_key
        );
        $product_id = apply_filters(
            'cartpops_cart_item_product_id',
            $cart_item['product_id'],
            $cart_item,
            $cart_item_key
        );
        $product_permalink = apply_filters(
            'cartpopse_cart_item_permalink',
            ( $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '' ),
            $cart_item,
            $cart_item_key
        );
        $html = '';
        
        if ( !$product_permalink ) {
            $html .= wp_kses_post( apply_filters(
                'cartpops_cart_item_name',
                $_product->get_name(),
                $cart_item,
                $cart_item_key
            ) . '&nbsp;' );
        } else {
            $html .= wp_kses_post( apply_filters(
                'cartpops_cart_item_name',
                sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ),
                $cart_item,
                $cart_item_key
            ) );
        }
        
        do_action( 'cartpops_after_cart_item_name', $cart_item, $cart_item_key );
        // Meta data.
        // $html .= wc_get_formatted_cart_item_data( $cart_item ); // PHPCS: XSS ok.
        // Backorder notification.
        
        if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
            $html .= wp_kses_post( apply_filters( 'woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'cartpops' ) . '</p>', $product_id ) );
            // phpcs:ignore
        }
        
        return $html;
    }
    
    /**
     * Increase animation counter
     *
     * @return void
     */
    public static function increase_animation_counter()
    {
        self::$animation_counter++;
    }
    
    /**
     * Increase and also return animation counter
     *
     * @return int
     */
    public static function increase_get_animation_counter()
    {
        self::increase_animation_counter();
        return self::$animation_counter;
    }
    
    /**
     * Increase and also return animation counter
     *
     * @return int
     */
    public static function get_animation_class()
    {
        self::increase_animation_counter();
        return 'cpops-animation__slick-delay-' . self::$animation_counter;
    }
    
    /**
     * Get animation
     *
     * @return int
     */
    public static function get_animation_counter()
    {
        return self::$animation_counter;
    }
    
    /**
     * Cart launcher shortcoce.
     *
     * @param array $atts Array of options.
     * @author Chris Jayden <support@cartpops.com>
     */
    public function shortcode_cart_launcher( $atts )
    {
        $cart_markup = '';
        $atts = shortcode_atts( array(
            'icon'                 => 'cpops-icon-shopping-cart-line',
            'subtotal'             => 'true',
            'indicator'            => 'bubble',
            'indicator_hide_empty' => 'false',
            'wrapper'              => 'true',
            'shortcode'            => 'true',
        ), $atts );
        if ( !WC()->cart ) {
            return $cart_markup;
        }
        ob_start();
        self::render_cart_launcher( $atts );
        $cart_markup = ob_get_clean();
        return $cart_markup;
    }
    
    /**
     * Renders the cart launcher partial.
     *
     * @param array $args An array of possible options.
     * @author Chris Jayden <support@cartpops.com>
     */
    public static function render_cart_launcher( $args = array() )
    {
        if ( !WC()->cart ) {
            return;
        }
        $defaults = array(
            'icon'                 => '',
            'subtotal'             => 'true',
            'indicator'            => 'bubble',
            'indicator_hide_empty' => 'false',
            'wrapper'              => 'false',
            'shortcode'            => 'false',
            'menu_item'            => 'false',
            'classes'              => apply_filters( 'cpops_cart_launcher_classes', array( 'cartpops-cart__wrapper' ) ),
        );
        $args = wp_parse_args( $args, $defaults );
        $product_count = WC()->cart->get_cart_contents_count();
        $sub_total = WC()->cart->get_cart_subtotal();
        $counter_attr = $product_count;
        if ( 'true' === $args['shortcode'] ) {
            $args['classes'][] = 'is-shortcode';
        }
        if ( 'true' === $args['menu_item'] ) {
            $args['classes'][] = 'is-menu';
        }
        if ( 'true' === $args['subtotal'] ) {
            $args['classes'][] = 'cartpops-cart--show-subtotal-yes';
        }
        if ( $args['indicator'] ) {
            switch ( $args['indicator'] ) {
                case 'none':
                    $args['classes'][] = 'cartpops-cart--items-indicator-hide';
                    break;
                case 'bubble':
                    $args['classes'][] = 'cartpops-cart--items-indicator-bubble';
                    break;
                case 'plain':
                    $args['classes'][] = 'cartpops-cart--items-indicator-plain';
                    break;
                default:
                    $args['classes'][] = 'cartpops-cart--items-indicator-bubble';
                    break;
            }
        }
        if ( 'true' === $args['indicator_hide_empty'] && $product_count === 0 ) {
            $args['classes'][] = 'cartpops-cart--empty-indicator-hide';
        }
        if ( 'true' === $args['wrapper'] ) {
            echo  '<div class="' . esc_html( implode( ' ', array_filter( $args['classes'] ) ) ) . '">' ;
        }
        ?>
		<div class="cartpops-cart__toggle cartpops-cart__container-wrapper" id="cartpops-cart-launcher-<?php 
        echo  esc_attr( wp_unique_id() ) ;
        ?>">
			<div class="cartpops-cart__container cpops-toggle-drawer">
				<span class="cartpops-cart__container-icon">
					<i class="<?php 
        echo  esc_attr( $args['icon'] ) ;
        ?>" aria-hidden="true"></i>
					<span class="cpops-sr-only"><?php 
        esc_html_e( 'Cart', 'cartpops' );
        ?></span>
					<span class="cartpops-cart__container-counter">0</span>
				</span>
				<span class="cartpops-cart__container-text"><?php 
        echo  wp_kses_post( $sub_total ) ;
        ?></span>
			</div>
		</div>
		<?php 
        if ( $args['wrapper'] ) {
            echo  '</div>' ;
        }
    }
    
    /**
     * Refresh the Menu Cart button and items counter.
     *
     * @param array $fragments Array of WooCommerce fragments.
     * @author Chris Jayden <support@cartpops.com>
     */
    public function menu_cart_fragments2( $fragments )
    {
        $has_cart = is_a( WC()->cart, 'WC_Cart' );
        if ( !$has_cart ) {
            return $fragments;
        }
        ob_start();
        self::render_cart_launcher( array() );
        $menu_cart_toggle_button_html = ob_get_clean();
        if ( !empty($menu_cart_toggle_button_html) ) {
            $fragments['div.cartpops-cart__toggle.cartpops-cart__container-wrapper'] = $menu_cart_toggle_button_html;
        }
        return $fragments;
    }
    
    /**
     * Ajaxify short-code cart count.
     *
     * @param $fragments
     *
     * @return mixed
     */
    public function menu_cart_fragments( $fragments )
    {
        $has_cart = is_a( WC()->cart, 'WC_Cart' );
        if ( !$has_cart ) {
            return $fragments;
        }
        $cart_count = WC()->cart->get_cart_contents_count();
        $cart_empty = ( $cart_count === 0 ? 'is-empty' : '' );
        $sub_total = WC()->cart->get_cart_subtotal();
        ob_start();
        echo  '<span class="cartpops-cart__container-counter ' . $cart_empty . '">' . sprintf( _n(
            '%d',
            '%d',
            $cart_count,
            'cartpops'
        ), $cart_count ) . '</span>' ;
        $cart_launcher_count = ob_get_clean();
        ob_start();
        ?>
		 <span class="cartpops-cart__container-text"><?php 
        echo  wp_kses_post( $sub_total ) ;
        ?></span>
		<?php 
        $cart_total = ob_get_clean();
        $fragments['.cartpops-cart__container-counter'] = $cart_launcher_count;
        $fragments['.cartpops-cart__container-text'] = $cart_total;
        return $fragments;
    }
    
    /**
     * Filter menu  by classfor any possible CartPops menu items.
     *
     * @param array $item_output Nav item output.
     * @param array $item Nav item.
     * @author Chris Jayden <support@cartpops.com>
     */
    public function filter_nav_menu( $item_output, $item )
    {
        if ( !is_object( $item ) || !isset( $item->object ) ) {
            return $item_output;
        }
        $cartpops_menu_item = false;
        foreach ( $item->classes as $class => $classname ) {
            if ( 'cpops-cart-menu-item' === $classname ) {
                $cartpops_menu_item = true;
            }
        }
        
        if ( $cartpops_menu_item ) {
            $icon = cartpops_get_option( 'menu_cart_launcher_icon' );
            $indicator = cartpops_get_option( 'menu_cart_launcher_indicator' );
            $indicator_empty = cartpops_get_option( 'menu_cart_launcher_indicator_empty' );
            $subtotal = cartpops_get_option( 'menu_cart_launcher_subtotal' );
            $args = array(
                'icon'                 => ( empty($icon) ? 'cpops-icon-shopping-cart-fill' : $icon ),
                'subtotal'             => ( empty($subtotal) ? 'false' : 'true' ),
                'indicator'            => ( empty($indicator) ? 'bubble' : $indicator ),
                'indicator_hide_empty' => ( empty($indicator_empty) ? 'false' : 'true' ),
                'wrapper'              => 'true',
                'menu_item'            => 'true',
            );
            ob_start();
            self::render_cart_launcher( $args );
            $cart = ob_get_clean();
            $item_output = '<a href="#" class="menu-link">';
            $item_output .= $cart;
            $item_output .= '</a>';
        }
        
        return $item_output;
    }
    
    /**
     * Match certain placeholders like {{example}} against variable array.
     *
     * @param string $body String containing placeholders that need to be replaced.
     * @param array  $vars Array of variables that match placeholders.
     * @author Chris Jayden <support@cartpops.com>
     */
    private function populate_placeholders( $body, array $vars )
    {
        foreach ( $vars as $key => $value ) {
            $placeholder = sprintf( '{{%s}}', $key );
            $body = str_replace( $placeholder, $value, $body );
        }
        return $body;
    }

}