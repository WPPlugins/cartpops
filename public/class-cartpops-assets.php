<?php

/**
 * The class that loads in all dynamic styling.
 *
 * @package    CartPops
 * @subpackage CartPops/assets
 * @author     Chris Jayden <help@cartpops.com>
 */
class CartPops_Assets
{
    private  $plugin_name ;
    private  $version ;
    private  $plugin_settings ;
    private  $trigger ;
    /**
     * Constructor
     *
     * @param string $plugin_name The plugin name.
     * @param int    $version Current plugin version.
     * @param object $plugin_settings instance of the plugin options.
     */
    public function __construct( $plugin_name, $version, $plugin_settings )
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->plugin_settings = $plugin_settings;
        $this->trigger = cartpops_get_option( 'add_to_cart_trigger' );
    }
    
    /**
     * Enqueue styles
     *
     * @return void
     */
    public function enqueue_frontend_styles()
    {
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $custom_css = cartpops_get_option( 'custom_css' );
        $recommendation_engine = cartpops_get_option( 'product_recommendation_engine_enable' );
        $shipping_calculator = cartpops_get_option( 'drawer_footer_display_shipping_calculator' );
        wp_enqueue_style(
            'cartpops-frontend',
            CARTPOPS_URL . 'public/dist/css/frontend.min.css',
            array(),
            $this->version,
            'all'
        );
        if ( $shipping_calculator ) {
            wp_enqueue_style(
                $this->plugin_name . '-select2',
                CARTPOPS_URL . 'public/dist/vendor/select2-frontend.min.css',
                array( 'cartpops-frontend' ),
                $this->version,
                'all'
            );
        }
        if ( $recommendation_engine ) {
            wp_enqueue_style(
                'cartpops-product-recommendations',
                CARTPOPS_URL . 'public/dist/css/product-recommendations.min.css',
                array( 'cartpops-frontend' ),
                $this->version,
                'all'
            );
        }
        if ( $custom_css ) {
            wp_add_inline_style( 'cartpops-frontend', wp_unslash( $custom_css ) );
        }
    }
    
    /**
     * Enqueue scripts
     *
     * @return void
     */
    public function enqueue_frontend_scripts()
    {
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $custom_js = cartpops_get_option( 'custom_js' );
        $custom_js = cartpops_get_option( 'custom_js' );
        $recommendation_engine = cartpops_get_option( 'product_recommendation_engine_enable' );
        $shipping_calculator = cartpops_get_option( 'drawer_footer_display_shipping_calculator' );
        wp_enqueue_script(
            'cartpops-frontend',
            CARTPOPS_URL . 'public/dist/js/frontend.min.js',
            array( 'jquery' ),
            $this->version,
            true
        );
        
        if ( $shipping_calculator ) {
            wp_enqueue_script( 'wc-country-select' );
            wp_enqueue_script( 'selectWoo' );
        }
        
        if ( $recommendation_engine ) {
            wp_enqueue_script(
                'cartpops-product-recommendations',
                CARTPOPS_URL . 'public/dist/js/product-recommendations.min.js',
                array( 'cartpops-frontend' ),
                $this->version,
                true
            );
        }
        wp_localize_script( 'cartpops-frontend', 'CartPopsConfig', array(
            'script_debug'            => ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? true : false ),
            'ajax_url'                => admin_url( 'admin-ajax.php' ),
            'pro'                     => wp_json_encode( fs_cartpops()->can_use_premium_code() ),
            'nonce'                   => wp_create_nonce( 'cartpops' ),
            'trigger'                 => $this->trigger,
            'forceRefresh'            => ( !empty(cartpops_get_option( 'force_fragments_refresh' )) ? wp_json_encode( true ) : wp_json_encode( false ) ),
            'refreshDelay'            => 150,
            'ajaxAddToCart'           => true,
            'isCheckoutPage'          => wp_json_encode( is_checkout() ),
            'isCartPage'              => wp_json_encode( is_cart() ),
            'genericAddToCartMessage' => ( !empty(cartpops_get_option( 'generic_add_to_cart_message_text' )) ? cartpops_get_option( 'generic_add_to_cart_message_text' ) : __( 'Product successfully added to your cart.', 'cartpops' ) ),
            'notificationDelay'       => apply_filters( 'cartpops_notification_remove_delay', 4200 ),
            'recommendationEngine'    => ( !empty($recommendation_engine) ? wp_json_encode( true ) : wp_json_encode( false ) ),
        ) );
        if ( $custom_js ) {
            wp_add_inline_script( 'cartpops-frontend', wp_unslash( $custom_js ) );
        }
    }
    
    /**
     * Enqueue dynamic CSS.
     *
     * @since    1.2.7
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    public function enqueue_dynamic_styles()
    {
        $border_radius = cartpops_get_option( 'border_radius_rounded' );
        $styles = $this->plugin_settings->get_color_settings();
        $cart_launcher_position = cartpops_get_option( 'floating_cart_launcher_position' );
        $drawer_width_mobile = cartpops_get_option( 'customize_width_drawer_mobile' );
        $drawer_width_desktop = cartpops_get_option( 'customize_width_drawer_desktop' );
        $text_white_space = cartpops_get_option( 'customize_white_space_text' );
        $animation_duration = cartpops_get_option( 'customize_animation_duration' );
        // Sanitize the values, to ensure that they are all strings
        // @link https://github.com/cartpops/cartpops/issues/31
        $styles = array_map( function ( $value ) {
            return ( is_string( $value ) ? $value : '' );
        }, $styles );
        if ( $styles ) {
            $dynamic_css = ":root {\n\t\t\t--color-cpops-text-primary: {$styles['color_typography_primary']};\n\t\t\t--color-cpops-text-secondary: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-text-tertiary: {$styles['color_typography_tertiary']};\n\t\t\t--color-cpops-accent-color: {$styles['color_accent']};\n\t\t\t--color-cpops-overlay-background: {$styles['color_overlay']};\n\t\t\t--color-cpops-background-primary: {$styles['color_background_primary']};\n\t\t\t--color-cpops-background-secondary: {$styles['color_background_secondary']};\n\t\t\t--color-cpops-button-primary-background: {$styles['color_button_primary_background']};\n\t\t\t--color-cpops-button-primary-text: {$styles['color_button_primary_text']};\n\t\t\t--color-cpops-button-secondary-background: {$styles['color_button_secondary_background']};\n\t\t\t--color-cpops-button-secondary-text: {$styles['color_button_secondary_text']};\n\t\t\t--color-cpops-input-field-background: {$styles['color_input_background']};\n\t\t\t--color-cpops-input-field-text: {$styles['color_input_text']};\n\t\t\t--color-cpops-border-color: {$styles['color_border']};\n\t\t\t--color-cpops-recommendations-plus-btn-text: {$styles['color_recommendations_button_text']};\n\t\t\t--color-cpops-recommendations-plus-btn-background: {$styles['color_recommendations_button_background']};\n\t\t\t--color-cpops-drawer-recommendations-background: {$styles['color_recommendations_drawer_background']};\n\t\t\t--color-cpops-drawer-recommendations-text: {$styles['color_recommendations_drawer_text']};\n\t\t\t--color-cpops-popup-recommendations-background: {$styles['color_recommendations_popup_background']};\n\t\t\t--color-cpops-popup-recommendations-text: {$styles['color_recommendations_popup_text']};\n\t\t\t--color-cpops-slider-pagination-bullet-active: {$styles['color_accent']};\n\t\t\t--color-cpops-slider-pagination-bullet: {$styles['color_accent']};\n\t\t\t--color-cpops-floating-cart-launcher-color: {$styles['color_floating_cart_laucher_icon']};\n\t\t\t--color-cpops-floating-cart-launcher-background: {$styles['color_floating_cart_laucher_background']};\n\t\t\t--color-cpops-floating-cart-launcher-indicator-text: {$styles['color_floating_cart_laucher_indicator_text']};\n\t\t\t--color-cpops-floating-cart-launcher-indicator-background: {$styles['color_floating_cart_laucher_indicator_background']};\n\t\t\t--color-cpops-cart-launcher-background: {$styles['color_cart_laucher_background']};\n\t\t\t--color-cpops-cart-launcher-text: {$styles['color_cart_laucher_text']};\n\t\t\t--color-cpops-cart-launcher-bubble-background: {$styles['color_cart_laucher_bubble_background']};\n\t\t\t--color-cpops-cart-launcher-bubble-text: {$styles['color_cart_laucher_bubble_text']};\n\t\t\t--color-cpops-close-color: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-remove-color: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-state-success: #24a317;\n\t\t\t--color-cpops-state-warning: #ffdd57;\n\t\t\t--color-cpops-state-danger: #f14668;\n\t\t\t}";
        }
        if ( $animation_duration ) {
            $dynamic_css .= ":root {\n\t\t\t\t--cpops-animation-duration: {$animation_duration}ms;\n\t\t\t}";
        }
        if ( $drawer_width_desktop ) {
            $dynamic_css .= ":root {\n\t\t\t\t--cpops-width-drawer-desktop: {$drawer_width_desktop}px;\n\t\t\t}";
        }
        if ( $drawer_width_mobile ) {
            $dynamic_css .= ":root {\n\t\t\t\t--cpops-width-drawer-mobile: {$drawer_width_mobile}%;\n\t\t\t}";
        }
        if ( $text_white_space ) {
            $dynamic_css .= ":root {\n\t\t\t\t--cpops-white-space-text: {$text_white_space};\n\t\t\t}";
        }
        
        if ( $border_radius ) {
            $dynamic_css .= ':root {
				--border-cpops-border-radius: 6px;
			}';
        } else {
            $dynamic_css .= ':root {
                --border-cpops-border-radius: 0;
			}';
        }
        
        if ( $cart_launcher_position && 'bottom_left' === $cart_launcher_position ) {
            $dynamic_css .= '#cpops-floating-cart {
				right: auto;
				left: 20px;
			}';
        }
        wp_add_inline_style( 'cartpops-frontend', $dynamic_css );
    }

}