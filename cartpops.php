<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://cartpops.com
 * @since             1.0.0
 * @package           CartPops
 *
 * @wordpress-plugin
 * Plugin Name:       CartPops
 * Plugin URI:        https://cartpops.com
 * Description:       Beautiful, responsive, and conversion optimized add to cart popup templates for WooCommerce.
 * Version:           1.0.8
 * Author:            CartPops
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       cartpops
 * Domain Path:       /languages
 *
 * WC requires at least: 3.0
 * WC tested up to: 4.8.0
 *
 */
// If this file is called directly, abort.
if ( !defined( 'WPINC' ) ) {
    die;
}
if ( !defined( 'CARTPOPS_VERSION' ) ) {
    define( 'CARTPOPS_VERSION', '1.0.8' );
}
if ( !defined( 'CARTPOPS_PREFIX' ) ) {
    define( 'CARTPOPS_PREFIX', 'cartpops' );
}
if ( !defined( 'CARTPOPS_URL' ) ) {
    define( 'CARTPOPS_URL', plugins_url( '/', __FILE__ ) );
}
if ( !defined( 'CARTPOPS_PATH' ) ) {
    define( 'CARTPOPS_PATH', plugin_dir_path( __FILE__ ) );
}
if ( !defined( 'CARTPOPS_DOCS' ) ) {
    define( 'CARTPOPS_DOCS', 'https://cartpops.com/docs/' );
}
if ( !defined( 'CARTPOPS_FILE' ) ) {
    define( 'CARTPOPS_FILE', plugin_basename( __FILE__ ) );
}
/**
 * Will stop plugin from loading if PHP version is below #.
 *
 * @author Chris Jayden <support@cartpops.com>
 */
function cartpops_cant_activate_msg()
{
    ?>
		<div class="notice notice-error is-dismissible checkout-wc">
			<?php 
    echo  sprintf( __( '<h3><strong>%s</strong>! WooCommerce is required to use CartPops.</h3>', CARTPOPS_PREFIX ), 'Oh no 😳' ) ;
    ?>
			<p>
			<?php 
    echo  sprintf( __( 'To prevent fatal errors, we have loaded %1$s into <strong>%2$s</strong>, which disables all features and functionality.', CARTPOPS_PREFIX ), 'CartPops', __( 'safe mode', CARTPOPS_PREFIX ) ) ;
    ?>
				</p>
				<p class="button-container">
					<?php 
    printf(
        '<a class="button button-primary" href="%1$s" target="_blank" rel="noopener noreferrer">%2$s <span class="screen-reader-text">%3$s</span><span aria-hidden="true" class="dashicons dashicons-external"></span></a>',
        esc_url( CARTPOPS_DOCS ),
        __( 'View troubleshooting docs' ),
        /* translators: Accessibility text. */
        __( '(opens in a new tab)' )
    );
    ?>
			</p>
		</div>
	<?php 
}

/**
 * Check if CartPops can activate. If not, will stop plugin from loading to prevent fatal errors.
 *
 * @return bool
 */
function cartpops_can_activate()
{
    if ( !in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
        return false;
    }
    return true;
}


if ( cartpops_can_activate() ) {
    
    if ( !function_exists( 'fs_cartpops' ) ) {
        // Create a helper function for easy SDK access.
        function fs_cartpops()
        {
            global  $fs_cartpops ;
            
            if ( !isset( $fs_cartpops ) ) {
                // Include Freemius SDK.
                require_once dirname( __FILE__ ) . '/freemius/start.php';
                $fs_cartpops = fs_dynamic_init( array(
                    'id'              => '7061',
                    'slug'            => 'cartpops',
                    'premium_slug'    => 'cartpops-pro',
                    'type'            => 'plugin',
                    'public_key'      => 'pk_f71eea687152e554f27b743874cd0',
                    'is_premium'      => false,
                    'premium_suffix'  => 'Pro',
                    'has_addons'      => false,
                    'has_paid_plans'  => true,
                    'trial'           => array(
                    'days'               => 14,
                    'is_require_payment' => true,
                ),
                    'has_affiliation' => 'selected',
                    'menu'            => array(
                    'slug' => 'cartpops',
                ),
                    'is_live'         => true,
                ) );
            }
            
            return $fs_cartpops;
        }
        
        // Init Freemius.
        fs_cartpops();
        // Signal that SDK was initiated.
        do_action( 'fs_cartpops_loaded' );
    }
    
    /**
     * The code that runs during plugin activation.
     * This action is documented in includes/class-cartpops-activator.php
     */
    function activate_cartpops()
    {
        require_once plugin_dir_path( __FILE__ ) . 'includes/class-cartpops-activator.php';
        CartPops_Activator::activate();
    }
    
    /**
     * The code that runs during plugin deactivation.
     * This action is documented in includes/class-cartpops-deactivator.php
     */
    function deactivate_cartpops()
    {
        require_once plugin_dir_path( __FILE__ ) . 'includes/class-cartpops-deactivator.php';
        CartPops_Deactivator::deactivate();
    }
    
    fs_cartpops()->add_action( 'after_uninstall', 'fs_cartpops_uninstall_cleanup' );
    register_activation_hook( __FILE__, 'activate_cartpops' );
    register_deactivation_hook( __FILE__, 'deactivate_cartpops' );
    /**
     * The core plugin class that is used to define internationalization,
     * admin-specific hooks, and public-facing site hooks.
     */
    require plugin_dir_path( __FILE__ ) . 'includes/class-cartpops.php';
    /**
     * Begins execution of the plugin.
     *
     * Since everything within the plugin is registered via hooks,
     * then kicking off the plugin from this point in the file does
     * not affect the page life cycle.
     *
     * @since    1.0.0
     */
    function run_cartpops()
    {
        $plugin = new CartPops();
        $plugin->run();
    }
    
    run_cartpops();
} else {
    add_action( 'admin_notices', 'cartpops_cant_activate_msg' );
}

// cartpops_can_activate()