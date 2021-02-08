<?php

/**
 * The class that loads in all dynamic styling.
 *
 * @package    CartPops
 * @subpackage CartPops/styles
 * @author     Chris Jayden <support@cartpops.com>
 */
class CartPops_Styles
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
     * The plugin settings.
     *
     * @since    1.0.0
     * @access   private
     * @var      object    $version    An object with settings.
     */
    private  $plugin_settings ;
    /**
     * Styles outputted by plugin options.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $styles    Current plugin option styles.
     */
    private  $style_options ;
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
    }
    
    /**
     * Enqueue dynamic CSS.
     *
     * @since    1.2.7
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    public function enqueue_styles()
    {
        $border_radius = cartpops_get_option( 'border_radius_rounded' );
        $styles = $this->plugin_settings->get_color_settings();
        $cart_launcher_position = cartpops_get_option( 'floating_cart_launcher_position' );
        $drawer_width_mobile = cartpops_get_option( 'customize_width_drawer_mobile' );
        $drawer_width_desktop = cartpops_get_option( 'customize_width_drawer_desktop' );
        $text_white_space = cartpops_get_option( 'customize_white_space_text' );
        $animation_duration = cartpops_get_option( 'customize_animation_duration' );
        if ( $styles ) {
            $dynamic_css = ":root {\n\t\t\t--color-cpops-text-primary: {$styles['color_typography_primary']};\n\t\t\t--color-cpops-text-secondary: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-text-tertiary: {$styles['color_typography_tertiary']};\n\t\t\t--color-cpops-accent-color: {$styles['color_accent']};\n\t\t\t--color-cpops-overlay-background: {$styles['color_overlay']};\n\t\t\t--color-cpops-background-primary: {$styles['color_background_primary']};\n\t\t\t--color-cpops-background-secondary: {$styles['color_background_secondary']};\n\t\t\t--color-cpops-button-primary-background: {$styles['color_button_primary_background']};\n\t\t\t--color-cpops-button-primary-text: {$styles['color_button_primary_text']};\n\t\t\t--color-cpops-button-secondary-background: {$styles['color_button_secondary_background']};\n\t\t\t--color-cpops-button-secondary-text: {$styles['color_button_secondary_text']};\n\t\t\t--color-cpops-input-field-background: {$styles['color_input_background']};\n\t\t\t--color-cpops-input-field-text: {$styles['color_input_text']};\n\t\t\t--color-cpops-border-color: {$styles['color_border']};\n\t\t\t--color-cpops-recommendations-plus-btn-background: {$styles['color_background_secondary']};\n\t\t\t--color-cpops-recommendations-plus-btn-text: {$styles['color_accent']};\n\t\t\t--color-cpops-drawer-recommendations-background: {$styles['color_recommendations_drawer_background']};\n\t\t\t--color-cpops-drawer-recommendations-text: {$styles['color_recommendations_drawer_text']};\n\t\t\t--color-cpops-popup-recommendations-background: {$styles['color_recommendations_popup_background']};\n\t\t\t--color-cpops-popup-recommendations-text: {$styles['color_recommendations_popup_text']};\n\t\t\t--color-cpops-slider-pagination-bullet-active: {$styles['color_accent']};\n\t\t\t--color-cpops-slider-pagination-bullet: {$styles['color_accent']};\n\t\t\t--color-cpops-floating-cart-launcher-color: {$styles['color_floating_cart_laucher_icon']};\n\t\t\t--color-cpops-floating-cart-launcher-background: {$styles['color_floating_cart_laucher_background']};\n\t\t\t--color-cpops-cart-launcher-background: {$styles['color_cart_laucher_background']};\n\t\t\t--color-cpops-cart-launcher-text: {$styles['color_cart_laucher_text']};\n\t\t\t--color-cpops-cart-launcher-bubble-background: {$styles['color_cart_laucher_bubble_background']};\n\t\t\t--color-cpops-cart-launcher-bubble-text: {$styles['color_cart_laucher_bubble_text']};\n\t\t\t--color-cpops-close-color: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-remove-color: {$styles['color_typography_secondary']};\n\t\t\t--color-cpops-state-success: #24a317;\n\t\t\t--color-cpops-state-warning: #ffdd57;\n\t\t\t--color-cpops-state-danger: #f14668;\n\t\t\t}";
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