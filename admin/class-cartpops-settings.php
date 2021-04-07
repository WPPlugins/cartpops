<?php

if ( !defined( 'ABSPATH' ) ) {
    exit;
}
class CartPops_Settings
{
    /**
     * Slug of the plugin screen.
     *
     * @since 1.0.0
     *
     * @var string
     */
    protected  $plugin_screen_hook_suffix = null ;
    /**
     * The ID of this plugin.
     *
     * @since  1.0.0
     * @access private
     * @var    string          $plugin_name        The ID of this plugin.
     */
    private  $plugin_name ;
    /**
     * The version of this plugin.
     *
     * @since  1.0.0
     * @access private
     * @var    string          $version            The current version of this plugin.
     */
    private  $version ;
    private  $settings_option_group ;
    private  $settings_base ;
    public  $settings ;
    private  $menu_slug ;
    private  $issue_list = array() ;
    private  $has_issues ;
    /**
     * Create a construct
     *
     * @param  string $plugin_name The name of the plugin.
     * @param  string $version     The version of this plugin.
     * @author Chris Jayden <help@cartpops.com>
     */
    public function __construct( $plugin_name, $version )
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        $this->settings_base = 'cartpops_';
        $this->settings_option_group = 'cartpops-settings';
        $this->menu_slug = 'cartpops';
        $this->has_issues = false;
    }
    
    /**
     * Initialise settings
     *
     * @return void
     */
    public function init_settings()
    {
        $this->settings = $this->settings_fields();
    }
    
    /**
    	/**
    * Adds a settings page link to a menu
    *
    * @link   https://codex.wordpress.org/Administration_Menus
    * @since  1.0.0
    * @return void
    */
    public function add_menu()
    {
        $this->plugin_screen_hook_suffix = add_menu_page(
            apply_filters( 'cartpops_admin_settings_page_title', esc_html__( 'CartPops Options', 'cartpops' ) ),
            apply_filters( 'cartpops_admin_settings_menu_title', esc_html__( 'CartPops', 'cartpops' ) ),
            'manage_options',
            $this->menu_slug,
            array( $this, 'settings_page' ),
            $this->get_admin_asset( 'icon-cartpops25x25@2x.png' ),
            81
        );
    }
    
    /**
     * Register the stylesheets for the Dashboard.
     *
     * @since 1.0.0
     */
    public function enqueue_styles()
    {
        if ( !isset( $this->plugin_screen_hook_suffix ) ) {
            return;
        }
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $screen = get_current_screen();
        wp_enqueue_style(
            'cartpops-admin-global',
            CARTPOPS_URL . 'assets/css/admin-global' . $suffix . '.css',
            array(),
            $this->version,
            'all'
        );
        
        if ( $this->plugin_screen_hook_suffix === $screen->id ) {
            wp_enqueue_style(
                $this->plugin_name . '-admin',
                CARTPOPS_URL . 'assets/css/admin' . $suffix . '.css',
                array(),
                $this->version,
                'all'
            );
            wp_enqueue_style(
                $this->plugin_name . '-admin-select2',
                CARTPOPS_URL . 'assets/lib/select2/select2' . $suffix . '.css',
                array(),
                $this->version,
                'all'
            );
            wp_enqueue_style(
                $this->plugin_name . '-admin-spectrum',
                CARTPOPS_URL . 'assets/lib/spectrum/spectrum' . $suffix . '.css',
                array(),
                $this->version,
                'all'
            );
            wp_enqueue_style(
                $this->plugin_name . '-admin-codemirror',
                CARTPOPS_URL . 'assets/lib/code-mirror/codemirror.css',
                array(),
                $this->version,
                'all'
            );
            wp_enqueue_style(
                $this->plugin_name . '-admin-codemirror-theme',
                CARTPOPS_URL . 'assets/lib/code-mirror/material.css',
                array(),
                $this->version,
                'all'
            );
        }
    
    }
    
    /**
     * Enqueue scripts
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function enqueue_scripts()
    {
        if ( !isset( $this->plugin_screen_hook_suffix ) ) {
            return;
        }
        $suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min' );
        $screen = get_current_screen();
        
        if ( $this->plugin_screen_hook_suffix === $screen->id ) {
            wp_enqueue_script( 'jquery-form' );
            wp_enqueue_script(
                $this->plugin_name . '-admin-script',
                CARTPOPS_URL . 'assets/js/admin' . $suffix . '.js',
                array( 'jquery', 'jquery-form' ),
                $this->version,
                true
            );
            wp_localize_script( $this->plugin_name . '-admin-script', 'CartPopsConfig', array(
                'ajax_url' => admin_url( 'admin-ajax.php' ),
                'nonce'    => wp_create_nonce( 'ajax-nonce' ),
            ) );
        }
    
    }
    
    /**
     * Adds links to the plugin links row.
     *
     * @since  1.0.0
     * @param  array  $links The current array of row links.
     * @param  string $file  The name of the file.
     * @return array The modified array of row links.
     */
    public function link_row( $links, $file )
    {
        if ( CARTPOPS_FILE === $file ) {
            $links[] = '<a href="http://twitter.com/slushman">Twitter</a>';
        }
        return $links;
    }
    
    /**
     * Adds a link to the plugin settings page.
     *
     * @since  1.0.0
     * @param  array $links The current array of links.
     * @return array The modified array of links
     */
    public function link_settings( $links )
    {
        $links[] = sprintf( '<a href="%s">%s</a>', esc_url( admin_url( 'admin.php?page=cartpops' ) ), esc_html__( 'Configure', 'cartpops' ) );
        return $links;
    }
    
    /**
     * Creates an array oof menu itmes for the plugin dashbooard.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function menu_items()
    {
        $menu_items['dashboard'] = array(
            'title' => __( 'Dashboard', 'cartpops' ),
            'icon'  => $this->get_admin_asset( 'menu-item-dashboard.svg' ),
        );
        $menu_items['appearance'] = array(
            'title' => __( 'Appearance', 'cartpops' ),
            'icon'  => $this->get_admin_asset( 'menu-item-appearance.svg' ),
        );
        $menu_items['customization'] = array(
            'title' => __( 'Customization', 'cartpops' ),
            'icon'  => $this->get_admin_asset( 'menu-item-customization.svg' ),
        );
        $menu_items['settings'] = array(
            'title' => __( 'Settings', 'cartpops' ),
            'icon'  => $this->get_admin_asset( 'menu-item-settings.svg' ),
        );
        $menu_items['power_ups'] = array(
            'title' => __( 'Power-ups', 'cartpops' ),
            'icon'  => $this->get_admin_asset( 'menu-item-power_ups.svg' ),
        );
        $menu_items['advanced'] = array(
            'title' => __( 'Advanced', 'cartpops' ),
            'icon'  => $this->get_admin_asset( 'menu-item-advanced.svg' ),
        );
        $menu_items = apply_filters( 'cartpops_settings_menu_items', $menu_items );
        return $menu_items;
    }
    
    /**
     * Build settings fields
     *
     * @return array Fields to be displayed on settings page
     */
    private function settings_fields()
    {
        $settings['quick_actions'] = array(
            'title'       => __( 'Quick actions', 'cartpops' ),
            'description' => __( 'All quick action options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'plugin_enable',
            'label'   => __( 'Enable CartPops', 'cartpops' ) . $this->tooltip(),
            'tooltip' => __( 'If you disable this, the plugin will stop working on the front-end of your website. This is useful if you temporarily want to disable CartPops without deactivating the entire plugin.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => 'on',
        ), array(
            'id'         => 'plugin_reset',
            'label'      => __( 'Delete plugin settings upon deactivation', 'cartpops' ) . $this->tooltip(),
            'tooltip'    => __( 'This wlll delete all plugins settings upon deactivation. Use with caution!', 'cartpops' ),
            'type'       => 'checkbox',
            'default'    => '',
            'attributes' => array(
            'class' => 'danger',
        ),
        ) ),
        );
        $settings['pro_benefits'] = array(
            'title'       => __( 'Pro benefits', 'cartpops' ),
            'description' => __( 'All Pro Benefits options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'support_chat_enable',
            'label'   => __( 'Enable chat support', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => 'on',
        ) ),
        );
        $settings['cart_trigger'] = array(
            'title'       => __( 'Add to cart trigger', 'cartpops' ),
            'description' => __( 'All add to cart trigger options', 'cartpops' ),
            'fields'      => array( array(
            'id'          => 'add_to_cart_trigger',
            'label'       => __( 'Select an add to cart trigger', 'cartpops' ),
            'description' => sprintf( __( "The Add To Cart trigger option allows you to choose which Add To Cart Trigger shows up on your customer's screen after they add something to thei cart. By default, the Drawer will always be available for your customers, and this can be used a replacement for your default WooCommerce cart page. You can allow customers to access the Drawer by activating the Floating Cart Launcher icon or using the shortcode [cartpops_cart_launcher]. You can read more about Add To Cart Triggers in the  %s.", 'cartpops' ), sprintf( '<a href="%s" rel="noopener nofollower" target="_blank">documentation</a>', cartpops_outbound_url( 'docs/features/add-to-cart-trigger/', 'Message', 'Documentation' ) ) ),
            'type'        => 'radio-images',
            'options'     => array(
            'drawer' => array(
            'title' => 'Drawer',
            'image' => $this->get_admin_asset( 'mode-drawer-example.png' ),
            'paid'  => 'false',
        ),
            'popup'  => array(
            'title' => 'Popup',
            'image' => $this->get_admin_asset( 'mode-popup-example.png' ),
            'paid'  => 'true',
        ),
            'bar'    => array(
            'title' => 'Bar',
            'image' => $this->get_admin_asset( 'mode-bar-example.png' ),
            'paid'  => 'true',
        ),
        ),
            'default'     => 'drawer',
        ) ),
        );
        $settings['coupon_form'] = array(
            'title'       => __( 'Coupon form', 'cartpops' ),
            'description' => __( 'All coupon form options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'coupon_form_enable',
            'label'   => __( 'Enable coupon form', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/coupon-form/', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will enable a coupon form on the CartPops Drawer that allows customers to claim discount codes.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ) ),
        );
        $settings['product_recommendation_engine'] = array(
            'title'       => __( 'Product Recommendation Engine', 'cartpops' ),
            'description' => __( 'All Product Recommendation Engine options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'      => 'product_recommendation_engine_enable',
            'label'   => __( 'Enable Product Recommendation Engine', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/product-recommendation-engine/', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will enable the Product Recommendation Engine.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ),
            array(
            'id'          => 'product_recommendation_engine_text',
            'label'       => __( 'Recommendations title', 'cartpops' ),
            'type'        => 'text',
            'default'     => __( 'You might also like these items.', 'cartpops' ),
            'placeholder' => __( 'Enter call to action text', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'      => 'product_recommendation_engine_type',
            'label'   => __( 'Select a Recommendation type', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/product-recommendation-engine/', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'Select a group of products that you want to recommend (only simple products are supported). If a product is already in the cart it will be excluded from the recommendations.', 'cartpops' ),
            'type'    => 'select',
            'options' => array(
            'upsells'     => __( 'Upsells', 'cartpops' ),
            'cross_sells' => __( 'Cross-sells', 'cartpops' ),
            'custom'      => __( 'Custom products (Pro)', 'cartpops' ),
        ),
            'default' => array( 'upsells' ),
        ),
            array(
            'id'      => 'product_recommendation_engine_fallback',
            'label'   => __( 'Select a fallback', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/product-recommendation-engine/', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'Select what you want to do in case there are no products to recommend.', 'cartpops' ),
            'type'    => 'select',
            'options' => array(
            'hide'            => __( 'Hide the Product Recommendation Engine', 'cartpops' ),
            'random_products' => __( 'Show random products', 'cartpops' ),
        ),
            'default' => array( 'hide' ),
        )
        ),
        );
        $settings['free_shipping_meter'] = array(
            'title'       => __( 'Free Shipping Meter', 'cartpops' ),
            'description' => __( 'All Free Shipping Meter options', 'cartpops' ),
            'fields'      => array( array(
            'id'          => 'free_shipping_meter_enable',
            'label'       => __( 'Enable Free Shipping Meter', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/free-shipping-progress-meter/', 'Tooltip', 'Documentation' ) ),
            'tooltip'     => __( 'This will enable the Free Shipping Meter on the CartPops Drawer and selected Add To Cart Trigger.', 'cartpops' ),
            'description' => __( 'This will enable the Free Shipping Meter on the CartPops Drawer and selected Add To Cart Trigger.', 'cartpops' ),
            'type'        => 'checkbox',
            'default'     => '',
            'paid'        => 'true',
        ) ),
        );
        $settings['assistant'] = array(
            'title'       => __( 'Enable Shopping Assistant', 'cartpops' ),
            'description' => __( 'All Shopping Assistant options', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'assistant_modal_enable',
            'label'   => __( 'Enable Free Shipping Meter', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/assistant/', 'Tooltip', 'Assistant' ) ),
            'tooltip' => __( 'This will enable the Shopping Assistant on the CartPops Drawer.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
            'paid'    => 'true',
        ), array(
            'id'      => 'assistant_coupon_form',
            'label'   => __( 'Enable smart assistant for coupon form', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#floating-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will enable a floating icon on your website on which customers can quickly activate the CartPops Drawer and view their cart items.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ) ),
        );
        $settings['floating_cart_launcher'] = array(
            'title'       => __( 'Floating Cart Launcher', 'cartpops' ),
            'description' => __( 'All Floating Cart Launcher options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'floating_cart_launcher_enable',
            'label'   => __( 'Enable Floating Cart Launcher', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#floating-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will enable a floating icon on your website on which customers can quickly activate the CartPops Drawer and view their cart items.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ), array(
            'id'        => 'floating_cart_launcher_position',
            'label'     => __( 'Select a position', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#floating-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip'   => __( 'Change how the Floating Cart Launcher is positioned. Useful if you\'re using live chat on your store.', 'cartpops' ),
            'type'      => 'select',
            'options'   => array(
            'bottom_right' => __( 'Bottom right', 'cartpops' ),
            'bottom_left'  => __( 'Bottom left', 'cartpops' ),
        ),
            'default'   => array( 'bottom_right' ),
            'relies_on' => array(
            'id'                  => 'floating_cart_launcher_enable',
            'value'               => 'on',
            'data-relies-default' => 'hidden',
        ),
        ) ),
        );
        $settings['menu_cart_launcher'] = array(
            'title'       => __( 'Cart Launcher', 'cartpops' ),
            'description' => __( 'All Menu Cart Launcher options', 'cartpops' ),
            'fields'      => array(
            array(
            'id'          => 'menu_cart_launcher_icon',
            'label'       => __( 'Menu Cart Launcher icon', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#menu-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip'     => __( 'Choose an icon to display', 'cartpops' ),
            'description' => __( 'Head over to Appearance -> Menu -> CartPops to activate this feature in your WordPress menu', 'cartpops' ),
            'type'        => 'select',
            'options'     => array(
            'cpops-icon-shopping-cart-outline' => __( 'Cart', 'cartpops' ) . ' 1',
            'cpops-icon-shopping-cart-line'    => __( 'Cart', 'cartpops' ) . ' 2',
            'cpops-icon-shopping-cart-fill'    => __( 'Cart', 'cartpops' ) . ' 3',
            'cpops-icon-shopping-cart-2-line'  => __( 'Cart', 'cartpops' ) . ' 4',
            'cpops-icon-shopping-cart-2-fill'  => __( 'Cart', 'cartpops' ) . ' 5',
            'cpops-icon-shopping-bag-outline'  => __( 'Cart', 'cartpops' ) . ' 6',
            'cpops-icon-shopping-bag-line'     => __( 'Bag', 'cartpops' ) . ' 2',
            'cpops-icon-shopping-bag-fill'     => __( 'Bag', 'cartpops' ) . ' 3',
            'cpops-icon-shopping-bag-2-line'   => __( 'Bag', 'cartpops' ) . ' 4',
            'cpops-icon-shopping-bag-2-fill'   => __( 'Bag', 'cartpops' ) . ' 5',
            'cpops-icon-shopping-bag-3-fill'   => __( 'Bag', 'cartpops' ) . ' 6',
            'cpops-icon-handbag-line'          => __( 'Bag', 'cartpops' ) . ' 7',
            'cpops-icon-cpops-handbag-fill'    => __( 'Bag', 'cartpops' ) . ' 8',
        ),
            'default'     => array( 'cpops-icon-shopping-bag-line' ),
        ),
            array(
            'id'      => 'menu_cart_launcher_indicator',
            'label'   => __( 'Menu Cart Launcher Indicator', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#menu-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'Choose if you wnat to show an indicator with the item total.', 'cartpops' ),
            'type'    => 'select',
            'options' => array(
            'none'   => __( 'None', 'cartpops' ),
            'bubble' => __( 'Bubble', 'cartpops' ),
            'plain'  => __( 'Plain', 'cartpops' ),
        ),
            'default' => array( 'bubble' ),
        ),
            array(
            'id'      => 'menu_cart_launcher_indicator_empty',
            'label'   => __( 'Hide indicator when cart is empty', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#menu-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will hide the indicator on the cart icon if the cart is empty.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ),
            array(
            'id'      => 'menu_cart_launcher_subtotal',
            'label'   => __( 'Show subtotal', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/cart-launcher/#menu-cart-launcher', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will show the subtotal next to the cart icon.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => 'on',
        )
        ),
        );
        $settings['appearance_primary'] = array(
            'title'       => __( 'Primary color schemes', 'cartpops' ),
            'description' => __( 'All primary color options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'      => 'color_background_primary',
            'label'   => __( 'Primary background color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        ),
            array(
            'id'      => 'color_background_secondary',
            'label'   => __( 'Secondary background color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#f7f7fe',
        ),
            array(
            'id'      => 'color_typography_primary',
            'label'   => __( 'Primary text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#000000',
        ),
            array(
            'id'      => 'color_typography_secondary',
            'label'   => __( 'Secondary text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#3B3B3B',
        ),
            array(
            'id'      => 'color_typography_tertiary',
            'label'   => __( 'Tertiary text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#D6D5D5',
        ),
            array(
            'id'      => 'color_border',
            'label'   => __( 'Border color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#dbdbe0',
        ),
            array(
            'id'      => 'color_accent',
            'label'   => __( 'Accent color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#705aef',
        ),
            array(
            'id'      => 'color_overlay',
            'label'   => __( 'Overlay color', 'cartpops' ),
            'type'    => 'color',
            'default' => 'rgba(33, 42, 47, 0.85)',
        ),
            array(
            'id'      => 'color_input_background',
            'label'   => __( 'Input field background color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        ),
            array(
            'id'      => 'color_input_text',
            'label'   => __( 'Input field text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#82828b',
        ),
            array(
            'id'      => 'border_radius_rounded',
            'label'   => __( 'Enable rounded style', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        )
        ),
        );
        $settings['customization_general'] = array(
            'title'       => __( 'General', 'cartpops' ),
            'description' => __( 'All General customization options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'animation_type',
            'label'   => __( 'Animation type', 'cartpops' ),
            'type'    => 'select',
            'options' => array(
            'none'   => __( 'None', 'cartpops' ),
            'fade'   => __( 'Fade', 'cartpops' ),
            'simple' => __( 'Slide in right', 'cartpops' ),
            'slick'  => __( 'Slick', 'cartpops' ),
        ),
            'default' => array( 'slick' ),
        ), array(
            'id'          => 'customize_animation_duration',
            'label'       => __( 'Animation speed', 'cartpops' ),
            'type'        => 'number',
            'placeholder' => __( '300', 'cartpops' ),
            'default'     => '',
            'attributes'  => array(
            'max' => '800',
            'min' => '50',
        ),
        ), array(
            'id'          => 'customize_white_space_text',
            'label'       => __( 'Truncate long text', 'cartpops' ),
            'type'        => 'select',
            'options'     => array(
            'nowrap' => __( 'Yes', 'cartpops' ),
            'break'  => __( 'No', 'cartpops' ),
        ),
            'placeholder' => __( 'Wrap text', 'cartpops' ),
        ) ),
        );
        $settings['customization_drawer'] = array(
            'title'       => __( 'Drawer', 'cartpops' ),
            'description' => __( 'All Drawer customization options.', 'cartpops' ),
            'fields'      => array( array(
            'id'          => 'customize_width_drawer_mobile',
            'label'       => __( 'Drawer width mobile (%)', 'cartpops' ),
            'type'        => 'number',
            'placeholder' => '80',
            'default'     => '',
            'attributes'  => array(
            'max' => '100',
            'min' => '50',
        ),
        ), array(
            'id'          => 'customize_width_drawer_desktop',
            'label'       => __( 'Drawer width desktop (px)', 'cartpops' ),
            'type'        => 'number',
            'placeholder' => '500',
            'attributes'  => array(
            'max' => '1400',
            'min' => '300',
        ),
            'default'     => '',
        ) ),
        );
        $settings['appearance_buttons'] = array(
            'title'       => __( 'Button color scheme', 'cartpops' ),
            'description' => __( 'All button color options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'      => 'color_button_primary_background',
            'label'   => __( 'Primary Button Background Color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#705aef',
        ),
            array(
            'id'      => 'color_button_primary_text',
            'label'   => __( 'Primary Button Text Color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        ),
            array(
            'id'      => 'color_button_secondary_background',
            'label'   => __( 'Secondary Button Secondary Background', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        ),
            array(
            'id'      => 'color_button_secondary_text',
            'label'   => __( 'Secondary Button Secondary Text', 'cartpops' ),
            'type'    => 'color',
            'default' => '#e6e6eb',
        )
        ),
        );
        $settings['appearance_recommendations'] = array(
            'title'       => __( 'Recommendations color scheme', 'cartpops' ),
            'description' => __( 'All Product Recommendation Engine color options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'      => 'color_recommendations_drawer_background',
            'label'   => __( 'Drawer Recommendations background color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#f7f7fe',
        ),
            array(
            'id'      => 'color_recommendations_drawer_text',
            'label'   => __( 'Drawer Recommendations text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#000000',
        ),
            array(
            'id'      => 'color_recommendations_popup_background',
            'label'   => __( 'Popup Recommendations background color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#f7f7fe',
        ),
            array(
            'id'      => 'color_recommendations_popup_text',
            'label'   => __( 'Popup Recommendations text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#000000',
        )
        ),
        );
        $settings['appearance_floating_cart_launcher'] = array(
            'title'       => __( 'Floating Cart Launcher Color Scheme', 'cartpops' ),
            'description' => __( 'All Floating Cart Launcher color options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'      => 'color_floating_cart_laucher_background',
            'label'   => __( 'Floating Cart Launcher background color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#000000',
        ),
            array(
            'id'      => 'color_floating_cart_laucher_icon',
            'label'   => __( 'Floating Cart Launcher icon color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        ),
            array(
            'id'      => 'color_floating_cart_laucher_indicator_background',
            'label'   => __( 'Floating Cart Launcher indicator background', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        ),
            array(
            'id'      => 'color_floating_cart_laucher_indicator_text',
            'label'   => __( 'Floating Cart Launcher indicator text', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        )
        ),
        );
        $settings['appearance_cart_launcher'] = array(
            'title'       => __( 'Cart Launcher Color Scheme', 'cartpops' ),
            'description' => __( 'All Cart Launcher color options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'      => 'color_cart_laucher_background',
            'label'   => __( 'Cart Launcher background color', 'cartpops' ),
            'type'    => 'color',
            'default' => 'rgba(255, 255, 255, 0)',
        ),
            array(
            'id'      => 'color_cart_laucher_text',
            'label'   => __( 'Cart Launcher text color', 'cartpops' ),
            'type'    => 'color',
            'default' => '#000000',
        ),
            array(
            'id'      => 'color_cart_laucher_bubble_background',
            'label'   => __( 'Cart Launcher bubble background', 'cartpops' ),
            'type'    => 'color',
            'default' => '#705aef',
        ),
            array(
            'id'      => 'color_cart_laucher_bubble_text',
            'label'   => __( 'Cart Launcher bubble text', 'cartpops' ),
            'type'    => 'color',
            'default' => '#ffffff',
        )
        ),
        );
        $settings['support_us'] = array(
            'title'       => __( 'Support Us', 'cartpops' ),
            'description' => __( 'All support us options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'support_us_enable',
            'label'   => __( 'Display Powered by CartPops', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/powered-by/', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'The core functionality of CartPops is free forever. You can support ongoing development and new updates by showing Powered by CartPops on your Add To Cart Triggers', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ), array(
            'id'          => 'support_us_partner_code',
            'label'       => __( 'Partner code', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/powered-by/', 'Tooltip', 'Affiliate Program' ) ),
            'tooltip'     => __( 'Replace the default Powered by CartPops branding link with your referral link.', 'cartpops' ),
            'type'        => 'number',
            'default'     => '',
            'attributes'  => array(
            'data-relies-on'       => 'support_us_enable',
            'data-relies-on-value' => 'on',
            'data-relies-default'  => 'hidden',
        ),
            'placeholder' => __( 'e.g. 93494', 'cartpops' ),
        ) ),
        );
        $settings['translate'] = array(
            'title'       => __( 'Translation', 'cartpops' ),
            'description' => __( 'All translation options.', 'cartpops' ),
            'fields'      => array(
            array(
            'id'          => 'drawer_header_title_text',
            'label'       => __( 'Drawer cart title', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'description' => __( 'These settings allow you to translate the plugin quickly. However, we recommend translating it via the .pot file in the plugin or with a popular translation plugin. We are actively working on including languages in the plugin by default so that this is not required.', 'cartpops' ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'My cart', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'coupon_title_text',
            'label'       => __( 'Coupon title', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'attributes'  => array(),
            'placeholder' => __( 'Got a discount code?', 'cartpops' ),
        ),
            array(
            'id'          => 'coupon_input_placeholder_text',
            'label'       => __( 'Coupon input field placeholder text', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'attributes'  => array(),
            'placeholder' => __( 'Enter discount code', 'cartpops' ),
        ),
            array(
            'id'          => 'coupon_button_text',
            'label'       => __( 'Coupon button text', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'attributes'  => array(),
            'placeholder' => __( 'Apply', 'cartpops' ),
        ),
            array(
            'id'          => 'subtotal_line_item_text',
            'label'       => __( 'Line item: Subtotal', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Subtotal', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'discount_line_item_text',
            'label'       => __( 'Line item: Discount', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Discount', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'total_line_item_text',
            'label'       => __( 'Line item: Total', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Total', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'checkout_button_text',
            'label'       => __( 'Checkout button', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Checkout now', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'checkout_button_empty_text',
            'label'       => __( 'Empty checkout button', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Your cart is empty. Shop now', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'drawer_empty_title_text',
            'label'       => __( 'Drawer empty state title', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Your cart is empty.', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'drawer_empty_subtitle_text',
            'label'       => __( 'Drawer empty state subtitle', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Looks like you haven\'t made a choice yet.', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'continue_shopping_text',
            'label'       => __( 'Continue shopping text', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'Or continue shopping', 'cartpops' ),
            'attributes'  => array(),
        ),
            array(
            'id'          => 'view_details_text',
            'label'       => __( 'View details text', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/tutorials/translate/', 'Tooltip', 'Translate' ) ),
            'type'        => 'text',
            'default'     => '',
            'placeholder' => __( 'View details', 'cartpops' ),
            'attributes'  => array(),
        )
        ),
        );
        $settings['custom_code'] = array(
            'title'       => __( 'Custom code', 'cartpops' ),
            'description' => __( 'All custom code options.', 'cartpops' ),
            'fields'      => array( array(
            'id'          => 'custom_css',
            'label'       => __( 'Custom CSS', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/custom-code/', 'Tooltip', 'Documentation' ) ),
            'tooltip'     => __( 'Add custom CSS, this will fire after any CartPops CSS. This is for more advanced users! You know what to do ʕ •ᴥ•ʔ ', 'cartpops' ),
            'type'        => 'textarea',
            'default'     => '',
            'placeholder' => esc_html( '#cpops-drawer { text: uppercase; }' ),
        ), array(
            'id'          => 'custom_js',
            'label'       => __( 'Custom Javascript', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/features/custom-code/', 'Tooltip', 'Documentation' ) ),
            'tooltip'     => __( 'Add custom JS, this will fire after any CartPops JS. This is for more advanced users! You know what to do ʕ •ᴥ•ʔ ', 'cartpops' ),
            'type'        => 'textarea',
            'default'     => '',
            'placeholder' => esc_html( 'console.log("Howdey!");' ),
        ) ),
        );
        $settings['miscellaneous'] = array(
            'title'       => __( 'Miscellaneous', 'cartpops' ),
            'description' => __( 'All miscellaneous options.', 'cartpops' ),
            'fields'      => array( array(
            'id'      => 'force_fragments_refresh',
            'label'   => __( 'Force refresh on page load', 'cartpops' ) . $this->tooltip( cartpops_outbound_url( 'docs/faq/force-refresh/', 'Tooltip', 'Documentation' ) ),
            'tooltip' => __( 'This will force refresh the cart on each page load. Only use if you\'re having troubles with how the cart loads.', 'cartpops' ),
            'type'    => 'checkbox',
            'default' => '',
        ) ),
        );
        $settings = apply_filters( 'cartpops_settings_fields', $settings );
        return $settings;
    }
    
    /**
     * Register plugin settings
     *
     * @return void
     */
    public function register_settings()
    {
        if ( is_array( $this->settings ) ) {
            foreach ( $this->settings as $section => $data ) {
                foreach ( $data['fields'] as $field ) {
                    // Validation callback for field.
                    $validation = '';
                    if ( isset( $field['callback'] ) ) {
                        $validation = $field['callback'];
                    }
                    // Register field.
                    $option_name = $this->settings_base . $field['id'];
                    register_setting( $this->settings_option_group, $option_name, $validation );
                    // Add field to page.
                    add_settings_field(
                        $field['id'],
                        $field['label'],
                        array( $this, 'display_field' ),
                        $this->settings_option_group,
                        $section,
                        array(
                        'label_for' => $field['label'],
                        'field'     => $field,
                    )
                    );
                }
            }
        }
    }
    
    /**
     * Helper function for getting colors.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function get_color_settings()
    {
        $color_options = array();
        foreach ( $this->settings_fields() as $section => $data ) {
            foreach ( $data['fields'] as $field ) {
                if ( strpos( $field['id'], 'color' ) !== false ) {
                    $color_options[$field['id']] = cartpops_get_option( $field['id'] );
                }
            }
        }
        return $color_options;
    }
    
    /**
     * Gets all WooCoommerce products.
     *
     * @param string $type WooCommerce product type.
     * @author Chris Jayden <help@cartpops.com>
     */
    public function get_product()
    {
        $all_products = array();
        // Get external products.
        $args = array(
            's'              => $_GET['q'],
            'type'           => 'simple',
            'post_status'    => 'publish',
            'posts_per_page' => 50,
        );
        $products = wc_get_products( $args );
        if ( !empty($products) && !is_wp_error( $products ) ) {
            foreach ( $products as $product ) {
                $all_products[$product->get_id()] = $product->get_name();
            }
        }
        echo  json_encode( $all_products ) ;
        die;
    }
    
    /**
     * Renders a tooltip on settings fields.
     *
     * @param string $link A link to the documentation.
     * @return string
     */
    public function tooltip( $link = 'https://cartpops.com/docs/' )
    {
        $var = '<a ';
        $var .= "href='" . esc_url( $link ) . "' title='" . __( 'View Documentation', 'cartpops' ) . "' ";
        $var .= "class='cpops-tooltip' target='_blank' rel=”noopener noreferrer”>?";
        $var .= '</a>';
        return $var;
    }
    
    /**
     * Returns potential issues that may hinder the plugin from working as expected.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    public function watch_potential_issues()
    {
        $issues = array();
        $transient = get_transient( 'cartpops_potential_issues' );
        // Yep!  Just return it and we're done.
        
        if ( !empty($transient) ) {
            // The function will return here every time after the first time it is run, until the transient expires.
            $issues = $transient;
            // Nope!  We gotta make a call.
        } else {
            
            if ( 'yes' === get_option( 'woocommerce_cart_redirect_after_add' ) ) {
                $issues['wc_cart_redirect']['category'] = array( 'general' );
                $issues['wc_cart_redirect']['error'] = __( 'An option in WooCommerce is turned on which will immediately redirect customers to the /cart/ page preventing CartPops to open.', 'cartpops' );
                /* translators: 1. Link */
                $issues['wc_cart_redirect']['fix'] = sprintf( __( 'Turn off "Redirect to the cart page after successful addition" in the WooCommerce plugin settings. %s.', 'cartpops' ), sprintf( '<a href="%s" rel="noopener nofollower" target="_blank">%s</a>', admin_url( 'admin.php?page=wc-settings&tab=products' ), __( 'Take me there', 'cartpops' ) ) );
            }
            
            set_transient( 'cartpops_potential_issues', $issues, DAY_IN_SECONDS );
        }
        
        if ( !$issues ) {
            return;
        }
        $this->has_issues = true;
        $this->issue_list = $issues;
        return apply_filters( 'cartpops_plugin_issues_list', $this->issue_list );
    }
    
    /**
     * Delete the issue l;ist transietn.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    public function delete_issues_transient()
    {
        $nonce = ( isset( $_POST['nonce'] ) ? sanitize_key( wp_unslash( $_POST['nonce'] ) ) : '' );
        if ( !wp_verify_nonce( $nonce, 'ajax-nonce' ) ) {
            die( 'Busted!' );
        }
        $deleted = delete_transient( 'cartpops_potential_issues' );
        
        if ( $deleted ) {
            wp_send_json_success( __( 'Refreshing issues', 'cartpops' ) );
        } else {
            wp_send_json_success( __( 'Something went wrong', 'cartpops' ) );
        }
        
        wp_die();
    }
    
    /**
     * Generate HTML for displaying fields.
     *
     * @param  array $args Field data.
     * @return void
     */
    public function display_field( $args )
    {
        $field = $args['field'];
        $html = '';
        $option_name = $this->settings_base . $field['id'];
        $option = get_option( $option_name );
        $data = '';
        
        if ( isset( $field['default'] ) ) {
            $data = $field['default'];
            if ( $option ) {
                $data = $option;
            }
        }
        
        $html .= "<div style='display: table; width: 100%;'>";
        $html .= "<div class='cartpops-input-wrapper'>";
        switch ( $field['type'] ) {
            case 'text':
                $attributes = array(
                    'type'        => 'text',
                    'name'        => esc_attr( $option_name ),
                    'id'          => esc_attr( $field['id'] ),
                    'placeholder' => esc_attr( $field['placeholder'] ),
                    'value'       => $data,
                );
                if ( $field['attributes'] ) {
                    $attributes = array_merge( $attributes, $field['attributes'] );
                }
                $html .= '<input ' . cartpops_implode_html_attributes( $attributes ) . '>' . "\n";
                break;
            case 'password':
            case 'number':
                $attributes = array(
                    'type'        => $field['type'],
                    'name'        => esc_attr( $option_name ),
                    'id'          => esc_attr( $field['id'] ),
                    'placeholder' => esc_attr( $field['placeholder'] ),
                    'value'       => $data,
                );
                if ( $field['attributes'] ) {
                    $attributes = array_merge( $attributes, $field['attributes'] );
                }
                $html .= '<input ' . cartpops_implode_html_attributes( $attributes ) . '>' . "\n";
                break;
            case 'text_secret':
                $html .= '<input id="' . esc_attr( $field['id'] ) . '" type="text" name="' . esc_attr( $option_name ) . '" placeholder="' . esc_attr( $field['placeholder'] ) . '" value=""/>' . "\n";
                break;
            case 'textarea':
                $html .= '<textarea id="' . esc_attr( $field['id'] ) . '" rows="5" cols="50" name="' . esc_attr( $option_name ) . '" placeholder="' . esc_attr( $field['placeholder'] ) . '">' . esc_textarea( $data ) . '</textarea><br/>' . "\n";
                break;
            case 'checkbox':
                $checked = '';
                if ( $option && 'on' === $option ) {
                    $checked = 'checked="checked"';
                }
                $checked = ( $option && 'on' === $option ? true : false );
                $disabled = ( isset( $field['paid'] ) && 'true' === $field['paid'] && !fs_cartpops()->is_premium() ? true : false );
                $html .= '<label class="switch" data-paid="' . (( true === $disabled ? esc_attr( 'true' ) : esc_attr( 'false' ) )) . '">';
                $html .= '<input aria-role="checkbox" id="' . esc_attr( $field['id'] ) . '" type="' . esc_attr( $field['type'] ) . '" name="' . esc_attr( $option_name ) . '" ' . checked( $checked, true, false ) . disabled( $disabled, true, false ) . '/>';
                $html .= '<span class="slider round"></span>';
                $html .= '</label>';
                break;
            case 'checkbox_multi':
                foreach ( $field['options'] as $k => $v ) {
                    $checked = false;
                    if ( in_array( $k, $data, true ) ) {
                        $checked = true;
                    }
                    $html .= '<label for="' . esc_attr( $field['id'] . '_' . $k ) . '"><input type="checkbox" ' . checked( $checked, true, false ) . ' name="' . esc_attr( $option_name ) . '[]" value="' . esc_attr( $k ) . '" id="' . esc_attr( $field['id'] . '_' . $k ) . '" /> ' . $v . '</label> ';
                }
                break;
            case 'radio':
                foreach ( $field['options'] as $k => $v ) {
                    $checked = false;
                    if ( $k === $data ) {
                        $checked = true;
                    }
                    $html .= '<label for="' . esc_attr( $field['id'] . '_' . $k ) . '"><input type="radio" ' . checked( $checked, true, false ) . ' name="' . esc_attr( $option_name ) . '" value="' . esc_attr( $k ) . '" id="' . esc_attr( $field['id'] . '_' . $k ) . '" /> ' . $v . '</label> ';
                }
                break;
            case 'radio-images':
                $html .= '<ul class="cpops-image-choices-field">';
                foreach ( $field['options'] as $k => $v ) {
                    $checked = ( $k === $data ? true : false );
                    $disabled = ( 'true' === $v['paid'] && !fs_cartpops()->can_use_premium_code() && !fs_cartpops()->is_premium() ? true : false );
                    $html .= '<li data-paid="' . (( true === $disabled ? esc_attr( 'true' ) : esc_attr( 'false' ) )) . '" class="cpops-image-choices-field__choice ' . (( true === $checked ? esc_attr( 'cpops-image-choices-field__choice-selected' ) : '' )) . '">';
                    $html .= '<input type="radio" ' . checked( $checked, true, false ) . disabled( $disabled, true, false ) . ' name="' . esc_attr( $option_name ) . '" name="' . esc_attr( $option_name ) . '" value="' . esc_attr( $k ) . '" id="' . esc_attr( $field['id'] . '_' . $k ) . '" />';
                    $html .= '<label for="' . esc_attr( $field['id'] . '_' . $k ) . '" id="' . esc_attr( $field['id'] . '_' . $k ) . '">';
                    $html .= '<span class="cpops-image-choices-field__choice-image-wrap" style="background-image:url(' . esc_attr( $v['image'] ) . ')">';
                    $html .= '<img alt="" class="cpops-image-choices-field__choice-image" data-lightbox-src="" src="' . esc_attr( $v['image'] ) . '">';
                    $html .= '</span>';
                    $html .= '<span class="cpops-image-choices-field__choice-text">' . esc_attr( $v['title'] ) . '</span>';
                    $html .= '</label>';
                    $html .= '</li>';
                }
                $html .= '</ul>';
                break;
            case 'select':
                $attributes = array(
                    'class' => '',
                    'name'  => esc_attr( $option_name ),
                    'id'    => esc_attr( $field['id'] ),
                );
                if ( array_key_exists( 'attributes', $field ) ) {
                    $attributes = array_merge( $attributes, $field['attributes'] );
                }
                $html .= '<select ' . cartpops_implode_html_attributes( $attributes ) . '>';
                foreach ( $field['options'] as $k => $v ) {
                    $selected = false;
                    $disabled = false;
                    if ( $k === $data ) {
                        $selected = true;
                    }
                    if ( strpos( $v, '(Pro)' ) ) {
                        
                        if ( !fs_cartpops()->can_use_premium_code() && !fs_cartpops()->is_premium() ) {
                            $disabled = true;
                            /* translators: %1$s  and %2$s are replaced with a plugin option name and %3$s with an emoji. */
                            $v = sprintf(
                                __( '%1$s %2$s Requires upgrade %3$s', 'cartpops' ),
                                $v,
                                ' - ',
                                '🔒'
                            );
                            $disabled = true;
                        }
                    
                    }
                    $html .= '<option ' . selected( $selected, true, false ) . disabled( $disabled, true, false ) . ' value="' . esc_attr( $k ) . '">' . $v . '</option>';
                }
                $html .= '</select> ';
                break;
            case 'select_multi':
                $attributes = array(
                    'class' => 'init_select2',
                    'name'  => esc_attr( $option_name ) . '[]',
                    'id'    => esc_attr( $field['id'] ),
                );
                if ( $field['attributes'] ) {
                    $attributes = array_merge( $attributes, $field['attributes'] );
                }
                $html .= '<select multiple="multiple" ' . cartpops_implode_html_attributes( $attributes ) . '>';
                foreach ( $field['options'] as $k => $v ) {
                    $selected = false;
                    if ( in_array( $k, $data, true ) ) {
                        $selected = true;
                    }
                    $html .= '<option ' . selected( $selected, true, false ) . ' value="' . esc_attr( $k ) . '" />' . $v . '</label> ';
                }
                $html .= '</select> ';
                break;
            case 'select_products':
                $attributes = array(
                    'class' => 'init_select2',
                    'name'  => esc_attr( $option_name ) . '[]',
                    'id'    => esc_attr( $field['id'] ),
                );
                if ( $field['attributes'] ) {
                    $attributes = array_merge( $attributes, $field['attributes'] );
                }
                $html .= '<select multiple="multiple" ' . cartpops_implode_html_attributes( $attributes ) . '>';
                foreach ( $field['options'] as $k => $product_id ) {
                    $selected = false;
                    if ( in_array( $product_id, $data, true ) ) {
                        $selected = true;
                    }
                    $product = wc_get_product( $product_id );
                    $html .= '<option ' . selected( $selected, true, false ) . ' value="' . esc_attr( $product_id ) . '" />' . $product->get_title() . '</label> ';
                }
                $html .= '</select> ';
                break;
            case 'image':
                $image_thumb = '';
                if ( $data ) {
                    $image_thumb = wp_get_attachment_thumb_url( $data );
                }
                $html .= '<img id="' . $option_name . '_preview" class="image_preview" src="' . $image_thumb . '" /><br/>' . "\n";
                $html .= '<input id="' . $option_name . '_button" type="button" data-uploader_title="' . __( 'Upload an image', 'cartpops' ) . '" data-uploader_button_text="' . __( 'Use image', 'cartpops' ) . '" class="image_upload_button button" value="' . __( 'Upload new image', 'cartpops' ) . '" />' . "\n";
                $html .= '<input id="' . $option_name . '_delete" type="button" class="image_delete_button button" value="' . __( 'Remove image', 'cartpops' ) . '" />' . "\n";
                $html .= '<input id="' . $option_name . '" class="image_data_field" type="hidden" name="' . $option_name . '" value="' . $data . '"/><br/>' . "\n";
                break;
            case 'color':
                $html .= '<input type="text" name="' . esc_attr( $option_name ) . '" id="' . esc_attr( $option_name ) . '" class="cpops-color-picker" value="' . esc_attr( $data ) . '" />';
                break;
            case 'checkbox_multi':
            case 'radio':
            case 'select_multi':
                $html .= '<br/><span class="description">' . $field['description'] . '</span>';
                break;
            default:
                // $html .= '<label for="' . esc_attr( $field['id'] ) . '"><span class="description">' . $field['description'] . '</span></label>' . "\n";
                break;
        }
        if ( !empty($field['description']) ) {
            $html .= '<div class="cartpops-input-wrapper__description cpops-message is-info"><div class="cpops-message-body">' . wp_kses_post( $field['description'] ) . '</div></div>';
        }
        
        if ( !empty($field['tooltip']) ) {
            $html .= '<div class="cartpops-tooltip-text-wrapper">';
            $html .= '<div class="cartpops-tooltips-text-container">';
            $html .= '<span class="cartpops-tooltips-text">';
            $html .= sprintf( esc_html( $field['tooltip'] ) . ' %s', '<span style="text-decoration:underline">' . __( 'Click [?] to go to the documentation', 'cartpops' ) . '</span>' );
            $html .= '</span>';
            $html .= '</div>';
            $html .= '</div>';
        }
        
        $html .= '</div>';
        $html .= '</div>';
        echo  $html ;
        // phpcs:ignore.
    }
    
    /**
     * Validate individual settings field.
     *
     * @param  string $data Inputted value.
     * @return string Validated value.
     */
    public function validate_field( $data )
    {
        if ( $data && strlen( $data ) > 0 && '' !== $data ) {
            $data = rawurlencode( strtolower( str_replace( ' ', '-', $data ) ) );
        }
        return $data;
    }
    
    /**
     * Load settings page content
     *
     * @return void
     */
    public function settings_page()
    {
        $current_tab = ( isset( $_GET['tab'] ) ? $_GET['tab'] : 'dashboard' );
        // phpcs:ignore.
        ?>
		<div id="cartpops-admin-panel">
			<div class="cpops-wrap">
				<div class="menu">
					<div class="head">
						<div class="logo">
							<img src="<?php 
        echo  esc_url( $this->get_admin_asset( 'logo.png' ) ) ;
        ?>" alt="CartPops logo" />
						</div>
						<div class="title">
							<?php 
        $plugin_type = ( fs_cartpops()->is__premium_only() ? 'Premium' : 'Free' );
        printf(
            '<span class="cpops-version">%s %s - %s</span>',
            esc_attr( $plugin_type ),
            esc_attr__( 'Version', 'cartpops' ),
            esc_attr( $this->version )
        );
        ?>
						</div>
					</div>
					<ul class="cartpops-menu-items">
						<?php 
        foreach ( $this->menu_items() as $menu_id => $menu_item ) {
            if ( !isset( $menu_item['title'] ) ) {
                continue;
            }
            printf(
                '<a class="%1$s" href="%2$s" data-tab="%3$s">%4$s</a>',
                ( empty($menu_item['href']) ? 'change-tab' : 'ext-link' ),
                ( empty($menu_item['href']) ? add_query_arg( array(
                'tab' => $menu_id,
            ) ) : esc_url( $menu_item['href'] ) ),
                $menu_id,
                sprintf(
                '<li class="%1$s"><img src="%2$s" />%3$s %4$s</li>',
                ( $current_tab === $menu_id ? 'active' : '' ),
                esc_attr( $menu_item['icon'] ),
                esc_attr( $menu_item['title'] ),
                ( true === $this->has_issues && 'dashboard' === $menu_id ? '<i class="cartpops-has-margin-left-sm" style="color:red" data-feather="alert-circle"></i>' : '' )
            )
            );
        }
        ?>
						<li class="seperator"></li>
						<a rel="noopener noreferrer" target="_blank" href="<?php 
        echo  esc_attr( cartpops_outbound_url( 'docs', 'Sidebar', 'Documentation' ) ) ;
        ?>">
							<li class="">
								<img src="<?php 
        echo  esc_attr( $this->get_admin_asset( 'question.svg' ) ) ;
        ?>">Visit help center
							</li>
						</a>
					</ul>
					<div class="foot">
						<?php 
        
        if ( fs_cartpops()->is_not_paying() ) {
            ?>
							<a href="<?php 
            echo  esc_attr( cartpops_outbound_url() ) ;
            ?>" class="cpops-button upgrade-button animated-button cartpops-fullwidth">Upgrade to Pro</a>
						<?php 
        }
        
        ?>
					</div>
				</div><!-- /.menu --->

				<div class="content">
					<form method="post" action="options.php" enctype="multipart/form-data" id="cartpops-options-form">
						<?php 
        settings_fields( $this->settings_option_group );
        ?>
							<?php 
        foreach ( $this->menu_items() as $menu_id => $menu_item ) {
            ?>
								<div class="tab <?php 
            echo  ( $menu_id === $current_tab ? 'active' : '' ) ;
            ?>" id="<?php 
            echo  esc_attr( $menu_id ) ;
            ?>">
									<div class="settings-hero">
										<?php 
            echo  esc_html( $menu_item['title'] ) ;
            ?>
										<div class="cpops-submit-slider"></div>
									</div>
									<div class="inner-content">
										<div class="cartpops-row">
											<?php 
            
            if ( 'dashboard' === $menu_id ) {
                ?>
												<div class="cartpops-col settings-col">
													<?php 
                $this->render_section_fields(
                    '',
                    '',
                    'content-issues',
                    __( 'Issues', 'cartpops' ),
                    'alert-circle'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'quick_actions',
                    '',
                    __( 'Quick actions', 'cartpops' ),
                    'navigation'
                );
                ?>
												</div>
												<div class="cartpops-col sidebar-col">
													<?php 
                $readme_file = CARTPOPS_PATH . 'README.txt';
                $this->changelog_markup( $readme_file );
                ?>
													<?php 
                ?>
														<?php 
                include 'views/upgrade-card.php';
                ?>
													<?php 
                ?>
												</div>
											<?php 
            }
            
            ?>
											<?php 
            
            if ( 'appearance' === $menu_id ) {
                ?>
												<div class="cartpops-col settings-col">
													<?php 
                $this->render_section_fields(
                    $this->settings_option_group,
                    'appearance_primary',
                    '',
                    __( 'Primary color scheme', 'cartpops' ),
                    'sliders'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'appearance_buttons',
                    '',
                    __( 'Buttons color scheme', 'cartpops' ),
                    'sliders'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'appearance_recommendations',
                    '',
                    __( 'Recommendations color scheme', 'cartpops' ),
                    'sliders'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'appearance_floating_cart_launcher',
                    '',
                    __( 'Floating Cart launcher color scheme', 'cartpops' ),
                    'sliders'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'appearance_cart_launcher',
                    '',
                    __( 'Cart launcher color scheme', 'cartpops' ),
                    'sliders'
                );
                ?>
												</div>
												<div class="cartpops-col sidebar-col">
													<?php 
                include 'views/card-color-themes.php';
                ?>
													<?php 
                ?>
														<?php 
                include 'views/upgrade-card.php';
                ?>
													<?php 
                ?>
												</div>
											<?php 
            }
            
            ?>
											<?php 
            
            if ( 'customization' === $menu_id ) {
                ?>
												<div class="cartpops-col settings-col">
													<?php 
                $this->render_section_fields(
                    $this->settings_option_group,
                    'customization_general',
                    '',
                    __( 'General', 'cartpops' ),
                    'sliders'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'customization_drawer',
                    '',
                    __( 'Drawer', 'cartpops' ),
                    'sliders'
                );
                ?>
												</div>
												<?php 
                ?>
													<div class="cartpops-col sidebar-col"><?php 
                include 'views/upgrade-card.php';
                ?></div>
												<?php 
                ?>
											<?php 
            }
            
            ?>
											<?php 
            
            if ( 'settings' === $menu_id ) {
                ?>
												<div class="cartpops-col settings-col">
												<?php 
                $this->render_section_fields(
                    $this->settings_option_group,
                    'cart_trigger',
                    '',
                    __( 'Add To Cart Trigger settings', 'cartpops' ),
                    'zap',
                    true
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'coupon_form',
                    '',
                    __( 'Coupon form settings', 'cartpops' ),
                    'percent'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'floating_cart_launcher',
                    '',
                    __( 'Floating Cart Launcher settings', 'cartpops' ),
                    'shopping-cart'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'menu_cart_launcher',
                    '',
                    __( 'Menu Cart launcher settings', 'cartpops' ),
                    'truck'
                );
                ?>
												</div>
												<?php 
                ?>
													<div class="cartpops-col sidebar-col"><?php 
                include 'views/upgrade-card.php';
                ?></div>
												<?php 
                ?>
											<?php 
            }
            
            ?>
											<?php 
            
            if ( 'power_ups' === $menu_id ) {
                ?>
												<div class="cartpops-col settings-col">
												<?php 
                $this->render_section_fields(
                    $this->settings_option_group,
                    'product_recommendation_engine',
                    '',
                    __( 'Product Recommendation Engine settings', 'cartpops' ),
                    'shopping-bag'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'free_shipping_meter',
                    '',
                    __( 'Free Shipping Meter settings', 'cartpops' ),
                    'truck',
                    true
                );
                // $this->render_section_fields(
                // $this->settings_option_group,
                // 'assistant',
                // '',
                // __( 'Shopping Assistant settings', 'cartpops' ),
                // 'truck',
                // true
                // );
                ?>
												</div>
												<?php 
                ?>
													<div class="cartpops-col sidebar-col"><?php 
                include 'views/upgrade-card.php';
                ?></div>
												<?php 
                ?>
											<?php 
            }
            
            ?>
											<?php 
            
            if ( 'advanced' === $menu_id ) {
                ?>
												<div class="cartpops-col settings-col">
												<?php 
                $this->render_section_fields(
                    $this->settings_option_group,
                    'support_us',
                    '',
                    __( 'Support on-going development', 'cartpops' ),
                    'coffee'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'translate',
                    '',
                    __( 'Translate', 'cartpops' ),
                    'globe'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'custom_code',
                    '',
                    __( 'Custom code settings', 'cartpops' ),
                    'code'
                );
                $this->render_section_fields(
                    $this->settings_option_group,
                    'miscellaneous',
                    '',
                    __( 'Miscellaneous & Experimental', 'cartpops' ),
                    'code'
                );
                ?>
												</div>
												<?php 
                ?>
													<div class="cartpops-col sidebar-col"><?php 
                include 'views/upgrade-card.php';
                ?></div>
												<?php 
                ?>
											<?php 
            }
            
            ?>
										</div>
									</div>
								</div>
							<?php 
        }
        ?>
					</form>

					<script type="text/javascript">
						jQuery(document).ready(function() {

							jQuery('#cartpops-options-form').submit(function( event ) {
								let submitButtons = jQuery(this).find(':submit');
								let settingsHeader = jQuery('.settings-hero');
								settingsHeader.append('<div class="cpops-submit-slider"></div>');

								jQuery(this).ajaxSubmit({
									beforeSend: function() {
										jQuery('.cpops-submit-slider').animate({
												width: '100%'
										}, 700);
										// add spinner
										submitButtons.addClass('is-loading');
										// lock button
										submitButtons.prop('disabled', true);
										// show progressbar

									},
									success: function() {
										setTimeout(function() {
											// remove spinner
											submitButtons.removeClass('is-loading');
											// unlock button
											submitButtons.prop('disabled', false);
											// show dynamic notification
											jQuery('.cpops-submit-slider').remove();
											jQuery(".cpops-submit-slider").css("width", '0%');
										}, 200);
									},
								});

								return false;
							});
						});
					</script>

					<?php 
        ?>
						<div class="cpops-upgrade-modal">
							<div class="cpops-upgrade-modal__inner">
							<div class="cpops-upgrade-modal__close">×</div>
								<div class="cpops-upgrade-modal__wrap">
									<?php 
        include 'views/upgrade-card.php';
        ?>
								</div>
							</div>
							<div class="cpops-upgrade-modal__overlay"></div>
						</div><!-- /.modal --->
					<?php 
        ?>
				</div><!-- /.content --->
			</div><!-- /.wrap --->
		</div>
		<?php 
    }
    
    /**
     * Render settings field
     *
     * @param string  $option_group Option groop to be printed.
     * @param string  $section_options Section to which it belongs.
     * @param string  $partial Content of the card. Must match partial.
     * @param string  $title Title of the section.
     * @param string  $icon Any icon to be included.
     * @param boolean $paid Whether it's a paid feature or not.
     * @author Chris Jayden <help@cartpops.com>
     */
    private function render_section_fields(
        $option_group,
        $section_options,
        $partial,
        $title,
        $icon,
        $paid = false
    )
    {
        global  $wp_settings_sections, $wp_settings_fields ;
        $card_classes = array( 'cartpops-card' );
        
        if ( !empty($partial) ) {
            $partial_class = 'partial-' . strtolower( $partial );
            $card_classes[] = $partial_class;
        }
        
        
        if ( !empty($section_options) ) {
            $section_option_class = 'settings-' . str_replace( '_', '-', strtolower( $section_options ) );
            $card_classes[] = $section_option_class;
        }
        
        require 'views/card.php';
    }
    
    /**
     * Returns the changelog HTML markup from the readme.txt file.
     *
     * @param string $readme_file The file to be looked fr.
     * @author Chris Jayden <help@cartpops.com>
     */
    public function changelog_markup( $readme_file )
    {
        $parsedown = new CartPops_Parsedown();
        $changelog = '';
        $data = file_get_contents( $readme_file );
        // phpcs:ignore.
        
        if ( !empty($data) ) {
            $data = explode( '== Changelog ==', $data );
            
            if ( !empty($data[1]) ) {
                $changelog = $data[1];
                $changelog = preg_replace( array( '/\\[\\/\\/\\]\\: \\# fs_.+?_only_begin/', '/\\[\\/\\/\\]\\: \\# fs_.+?_only_end/' ), '', $changelog );
                $changelog = $parsedown->text( $changelog );
                $changelog = preg_replace( array( '/\\<strong\\>(.+?)\\<\\/strong>\\:(.+?)\\n/i', '/\\<p\\>/', '/\\<\\/p\\>/' ), array( '<span class="changelog-category $1">$1</span><span class="changelog-description">$2</span>', '', '' ), $changelog );
            }
        
        }
        
        ?>
		<div class="cartpops-card">
			<div class="card-content">
				<div class="card-head">
					<h2><i data-feather="edit"></i> Changelog</h2>
				</div>
				<div class="card-inside">
					<div class="cpops-changelog"><?php 
        echo  wp_kses( $changelog, wp_kses_allowed_html( 'post' ) ) ;
        ?></div>
				</div>
			</div>
		</div>
		<?php 
    }
    
    /**
     * Helper function for getting an admin asset from the images folder.
     *
     * @param string $asset Filename like example.png or example.jpg.
     * @author Chris Jayden <help@cartpops.com>
     */
    private function get_admin_asset( $asset )
    {
        return CARTPOPS_URL . 'assets/images/admin/' . $asset;
    }
    
    /**
     * Registers a menu menu admin box.
     *
     * @author Chris Jayden <help@cartpops.com>
     */
    public function my_register_menu_metabox()
    {
        add_meta_box(
            'cartpops_menu_item',
            __( 'CartPops', 'cartpops' ),
            array( $this, 'nav_menu_link' ),
            'nav-menus',
            'side',
            'default'
        );
    }
    
    /**
     * Displays a menu metabox
     */
    public function nav_menu_link()
    {
        ?>
		<div id="posttype-cpops-cart-item" class="posttypediv">
			<div id="tabs-panel-cartpops-cart-item" class="tabs-panel tabs-panel-active">
				<ul id ="cartpops-cart-item-checklist" class="categorychecklist form-no-clear">
					<li>
						<label class="menu-item-title">
							<input type="checkbox" class="menu-item-checkbox" name="menu-item[-1][menu-item-object-id]" value="-1"> CartPops Cart Item
						</label>
						<input type="hidden" class="menu-item-type" name="menu-item[-1][menu-item-type]" value="custom">
						<input type="hidden" class="menu-item-title" name="menu-item[-1][menu-item-title]" value="CartPops Cart Item (Beta)">
						<input type="hidden" class="menu-item-url" name="menu-item[-1][menu-item-url]" value="#">
						<input type="hidden" class="menu-item-classes" name="menu-item[-1][menu-item-classes]" value="cpops-cart-menu-item">
					</li>
				</ul>
			</div>
			<p class="button-controls">
				<span class="add-to-menu">
					<input type="submit" class="button-secondary submit-add-to-menu right" value="Add to Menu" name="add-post-type-menu-item" id="submit-posttype-cpops-cart-item">
					<span class="spinner"></span>
				</span>
			</p>
		</div>
		<?php 
    }
    
    /**
     * Check if we're on the admin screen.
     *
     * @author Chris Jayden <chris@chrisjayden.com>
     */
    private function is_admin()
    {
        $screen = get_current_screen();
        if ( $this->plugin_screen_hook_suffix === $screen->id ) {
            return true;
        }
        return false;
    }

}