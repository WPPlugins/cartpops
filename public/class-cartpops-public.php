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
     * Styles outputted by plugin options.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $styles    Current plugin option styles.
     */
    private  $style_options = null ;
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
     * Constructor
     *
     * @param string $plugin_name The plugin name.
     * @param int    $version Current plugin version.
     * @param string $plugin_settings instance of the plugin options.
     */
    public function __construct( $plugin_name, $version, $plugin_settings )
    {
        self::$animation_counter = 0;
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->trigger = cartpops_get_option( 'add_to_cart_trigger' );
        $this->animation_type = cartpops_get_option( 'animation_type' );
        $this->plugin_settings = $plugin_settings;
    }
    
    /**
     * Enqueue styles
     *
     * @return void
     */
    public function enqueue_styles()
    {
        $styles = $this->plugin_settings->get_color_settings();
        $cart_launcher_position = cartpops_get_option( 'floating_cart_launcher_position' );
        $custom_css = cartpops_get_option( 'custom_css' );
        $border_radius = cartpops_get_option( 'border_radius_rounded' );
        wp_enqueue_style(
            $this->plugin_name . '-public',
            plugin_dir_url( __FILE__ ) . 'dist/css/public.css',
            array(),
            $this->version,
            'all'
        );
        if ( $styles ) {
            $this->style_options = ":root {\n\t\t\t--color-cpops-text-primary: {$styles['color_typography_primary']};\n\t\t\t--color-cpops-text-secondary: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-text-tertiary: {$styles['color_typography_tertiary']};\n\t\t\t--color-cpops-accent-color: {$styles['color_accent']};\n\t\t\t--color-cpops-overlay-background: {$styles['color_overlay']};\n\t\t\t--color-cpops-background-primary: {$styles['color_background_primary']};\n\t\t\t--color-cpops-background-secondary: {$styles['color_background_secondary']};\n\t\t\t--color-cpops-button-primary-background: {$styles['color_button_primary_background']};\n\t\t\t--color-cpops-button-primary-text: {$styles['color_button_primary_text']};\n\t\t\t--color-cpops-button-secondary-background: {$styles['color_button_secondary_background']};\n\t\t\t--color-cpops-button-secondary-text: {$styles['color_button_secondary_text']};\n\t\t\t--color-cpops-input-field-background: {$styles['color_input_background']};\n\t\t\t--color-cpops-input-field-text: {$styles['color_input_text']};\n\t\t\t--color-cpops-border-color: {$styles['color_border']};\n\t\t\t--color-cpops-free-shipping-meter-background: {$styles['color_free_shipping_meter_background']};\n\t\t\t--color-cpops-free-shipping-meter-background-active: {$styles['color_free_shipping_meter_background_active']};\n\t\t\t--color-cpops-recommendations-plus-btn-background: {$styles['color_background_secondary']};\n\t\t\t--color-cpops-recommendations-plus-btn-text: {$styles['color_accent']};\n\t\t\t--color-cpops-drawer-recommendations-background: {$styles['color_recommendations_drawer_background']};\n\t\t\t--color-cpops-drawer-recommendations-text: {$styles['color_recommendations_drawer_text']};\n\t\t\t--color-cpops-popup-recommendations-background: {$styles['color_recommendations_popup_background']};\n\t\t\t--color-cpops-popup-recommendations-text: {$styles['color_recommendations_popup_text']};\n\t\t\t--color-cpops-slider-pagination-bullet-active: {$styles['color_accent']};\n\t\t\t--color-cpops-slider-pagination-bullet: {$styles['color_accent']};\n\t\t\t--color-cpops-floating-cart-launcher-color: {$styles['color_floating_cart_laucher_icon']};\n\t\t\t--color-cpops-floating-cart-launcher-background: {$styles['color_floating_cart_laucher_background']};\n\t\t\t--color-cpops-cart-launcher-background: {$styles['color_cart_laucher_background']};\n\t\t\t--color-cpops-cart-launcher-text: {$styles['color_cart_laucher_text']};\n\t\t\t--color-cpops-cart-launcher-bubble-background: {$styles['color_cart_laucher_bubble_background']};\n\t\t\t--color-cpops-cart-launcher-bubble-text: {$styles['color_cart_laucher_bubble_text']};\n\t\t\t--color-cpops-close-color: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-remove-color: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-state-success: #24a317;\n\t\t\t--color-cpops-state-warning: #ffdd57;\n\t\t\t--color-cpops-state-danger: #f14668;\n\t\t\t}";
        }
        
        if ( $border_radius ) {
            $this->style_options .= ':root {
				--border-cpops-border-radius: 6px;
			}';
        } else {
            $this->style_options .= ':root {
                --border-cpops-border-radius: 0;
			}';
        }
        
        if ( $cart_launcher_position && 'bottom_left' === $cart_launcher_position ) {
            $this->style_options .= '#cpops-floating-cart {
				right: auto;
				left: 20px;
			}';
        }
        wp_add_inline_style( $this->plugin_name . '-public', $this->style_options );
        if ( $custom_css ) {
            wp_add_inline_style( $this->plugin_name . '-public', wp_unslash( $custom_css ) );
        }
    }
    
    /**
     * Enqueue scripts
     *
     * @return void
     */
    public function enqueue_scripts()
    {
        $custom_js = cartpops_get_option( 'custom_js' );
        wp_enqueue_script(
            $this->plugin_name . '-public',
            plugin_dir_url( __FILE__ ) . 'dist/js/public.js',
            array( 'jquery' ),
            $this->version,
            true
        );
        wp_enqueue_script(
            $this->plugin_name . '-swiper',
            plugin_dir_url( __FILE__ ) . 'dist/vendor/swiper-bundle.js',
            array(),
            $this->version,
            true
        );
        wp_localize_script( $this->plugin_name . '-public', 'cartpops_options', array(
            'ajax_url'    => admin_url( 'admin-ajax.php' ),
            'wc_ajax_url' => WC_AJAX::get_endpoint( '%%endpoint%%' ),
            'nonce'       => wp_create_nonce( 'cartpops' ),
            'trigger'     => $this->trigger,
        ) );
        if ( $custom_js ) {
            wp_add_inline_script( $this->plugin_name . '-public', wp_unslash( $custom_js ) );
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
        $data = array(
            'classes' => apply_filters( 'cpops_drawer_header_classes', array( 'cpops-drawer-header__heading' ) ),
        );
        if ( 'slideup' === $this->animation_type ) {
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
                    'cpops_cart_item'         => $item,
                    'cpops_cart_item_key'     => $item['key'],
                    'cpops_product'           => $product,
                    'cpops_product_id'        => $item['product_id'],
                    'cpops_product_permalink' => ( $product->is_visible() ? $product->get_permalink( $item ) : '' ),
                    'cpops_thumbnail'         => $product->get_image(),
                    'cpops_product_name'      => $this->get_product_name( $item, $item['key'] ),
                    'cpops_product_price'     => WC()->cart->get_product_price( $product ),
                    'cpops_product_subtotal'  => WC()->cart->get_product_subtotal( $product, $item['quantity'] ),
                    'cpops_max_value'         => $product->get_max_purchase_quantity(),
                    'cpops_min_value'         => $product->get_min_purchase_quantity(),
                    'cpops_step'              => 1,
                    'cpops_pattern'           => ( has_filter( 'woocommerce_stock_amount', 'intval' ) ? '[0-9]*' : '' ),
                );
                if ( 'slideup' === $this->animation_type ) {
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
                'headline'  => sprintf( __( '%s Your cart is empty.', 'cartpops' ), '✨' ),
                'subheader' => __( "Looks like you haven't made a choice yet.", 'cartpops' ),
                'img'       => ( empty($empty_cart_image) ? plugin_dir_url( __FILE__ ) . 'dist/images/empty-shopping-bag.png' : '' ),
            );
            if ( 'slideup' === $this->animation_type ) {
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
     * Renders the coupon form partial.
     *
     * @return void
     */
    public function render_coupon_form()
    {
        $enable_discount = cartpops_get_option( 'coupon_form_enable' );
        
        if ( $enable_discount && wc_coupons_enabled() ) {
            $coupons = WC()->cart->get_applied_coupons();
            if ( $coupons ) {
                foreach ( $coupons as $coupon ) {
                    $coupon = new WC_Coupon( $coupon );
                }
            }
            $data = array(
                'classes'         => apply_filters( 'cpops_drawer_coupon_form_classes', array( 'cpops-drawer-coupon' ) ),
                'active_coupon'   => WC()->cart->get_applied_coupons(),
                'currency_symbol' => get_woocommerce_currency_symbol(),
                'cpops_coupon'    => ( isset( $coupon ) ? $coupon->get_code() : '' ),
            );
            if ( 'slideup' === $this->animation_type ) {
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
            $title = cartpops_get_option( 'product_recommendation_engine_text' );
            $data = array(
                'classes'              => apply_filters( 'cpops_drawer_empty_cart_classes', array( 'cpops-drawer-recommendations' ) ),
                'title'                => ( !empty($title) ? $title : __( 'You might also like these items!', 'cartpops' ) ),
                'recommended_products' => $products,
            );
            if ( 'slideup' === $this->animation_type ) {
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
        $data = array(
            'classes'     => apply_filters( 'cpops_drawer_cart_totals_classes', array( 'cpops-cart-total' ) ),
            'subtotal'    => WC()->cart->get_cart_subtotal(),
            'coupon'      => WC()->cart->get_coupons(),
            'discount'    => '-' . wc_price( WC()->cart->get_discount_total() + WC()->cart->get_discount_tax() ),
            'total'       => ( empty($applied_coupons) ? WC()->cart->get_cart_subtotal() : WC()->cart->get_cart_total() ),
            'button_text' => ( empty($cart) ? sprintf( __( 'Your cart is empty. Shop now %s', 'cartpops' ), '&#8594;' ) : sprintf( __( 'Checkout now %s', 'cartpops' ), '&#8594;' ) ),
            'url'         => ( empty($cart) ? get_permalink( wc_get_page_id( 'shop' ) ) : wc_get_checkout_url() ),
        );
        if ( 'slideup' === $this->animation_type ) {
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
        $url = cartpops_outbound_url( '', 'Add To Cart Trigger', 'Powered By' );
        if ( $affiliate_url ) {
            $url = "https://r.freemius.com/7061/{$affiliate_url}/";
        }
        $data = array(
            'classes' => apply_filters( 'cpops_powered_by_classes', array( 'cpops-powered-by' ) ),
            'url'     => esc_url( $url ),
        );
        if ( 'slideup' === $this->animation_type ) {
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
            wp_send_json_error( esc_html__( 'Something went wrong, please reload the page.', 'cartpops' ) );
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
            wp_send_json_error();
        }
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
            wp_send_json_error();
        }
        $cart_key = sanitize_text_field( wp_unslash( $_POST['cart_key'] ) );
        if ( isset( $_POST['quantity'] ) ) {
            $quantity = (double) $_POST['quantity'];
        }
        if ( !is_numeric( $quantity ) || $quantity < 0 || !$cart_key ) {
            wp_send_json( array(
                'error' => __( 'Something went wrong', 'cartpops' ),
            ) );
        }
        
        if ( 0 === (int) $quantity ) {
            $action = WC()->cart->remove_cart_item( $cart_key );
        } else {
            $action = WC()->cart->set_quantity( $cart_key, $quantity );
        }
        
        
        if ( $action ) {
            wc_add_notice( __( 'Your cart was updated successfully', 'cartpops' ), 'success' );
            WC_AJAX::get_refreshed_fragments();
        } else {
            wp_send_json( array(
                'error' => __( 'Something went wrong', 'cartpops' ),
            ) );
        }
        
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
            wp_send_json_error();
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
            wp_send_json_error();
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
                if ( 'slideup' === $this->animation_type ) {
                    $data['classes'][] = 'cpops-animation__slideup-delay-1';
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
        return 'cpops-animation__slideup-delay-' . self::$animation_counter;
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
        $atts = shortcode_atts( array(
            'icon'                 => 'cpops-icon-shopping-cart-line',
            'subtotal'             => 'true',
            'indicator'            => 'bubble',
            'indicator_hide_empty' => 'false',
            'wrapper'              => 'true',
        ), $atts, 'cartpops' );
        if ( !WC()->cart ) {
            return;
        }
        ob_start();
        $this->render_cart_launcher( $atts );
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
            'icon'                 => 'cpops-icon-shopping-cart-line',
            'subtotal'             => 'true',
            'indicator'            => 'bubble',
            'indicator_hide_empty' => 'false',
            'classes'              => apply_filters( 'cpops_cart_launcher_classes', array( 'cartpops-cart__wrapper', 'cpops-toggle-drawer' ) ),
            'wrapper'              => 'false',
        );
        $args = wp_parse_args( $args, $defaults );
        $product_count = WC()->cart->get_cart_contents_count();
        $sub_total = WC()->cart->get_cart_subtotal();
        $counter_attr = $product_count;
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
        if ( 'true' === $args['indicator_hide_empty'] ) {
            $args['classes'][] = 'cartpops-cart--empty-indicator-hide';
        }
        if ( 'true' === $args['wrapper'] ) {
            echo  '<div class="' . esc_html( implode( ' ', array_filter( $args['classes'] ) ) ) . '">' ;
        }
        ?>
		<div class="cartpops-cart__toggle cartpops-cart__container-wrapper">
			<div id="cartpops-cart__toggle_button" class="cartpops-cart__container">
				<span class="cartpops-cart__container-icon" data-counter="<?php 
        echo  esc_attr( $counter_attr ) ;
        ?>">
					<i class="<?php 
        echo  esc_attr( $args['icon'] ) ;
        ?>" aria-hidden="true"></i>
					<span class="cpops-sr-only"><?php 
        esc_html_e( 'Cart', 'cartpops' );
        ?></span>
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
    public function menu_cart_fragments( $fragments )
    {
        $has_cart = is_a( WC()->cart, 'WC_Cart' );
        if ( !$has_cart ) {
            return $fragments;
        }
        ob_start();
        self::render_cart_launcher();
        $menu_cart_toggle_button_html = ob_get_clean();
        if ( !empty($menu_cart_toggle_button_html) ) {
            $fragments['div.cartpops-cart__toggle.cartpops-cart__container-wrapper'] = $menu_cart_toggle_button_html;
        }
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