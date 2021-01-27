<?php
/**
 * Fired during plugin deactivation
 *
 * @link       https://cartpops.com
 * @since      1.0.0
 *
 * @package    CartPops
 * @subpackage CartPops/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    CartPops
 * @subpackage CartPops/includes
 * @author     Chris Jayden <support@cartpops.com>
 */
class CartPops_Deactivator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function deactivate() {
			self::remove_options();
	}

	/**
	 * Removes all plugin options.
	 *
	 * @author Chris Jayden <support@cartpops.com>
	 */
	public static function remove_options() {
		$delete_options = cartpops_get_option( 'plugin_reset' );

		if ( $delete_options ) {
			global $wpdb;

			$plugin_options = $wpdb->get_results( "SELECT option_name FROM $wpdb->options WHERE option_name LIKE 'cartpops_%'" );

			foreach ( $plugin_options as $option ) {
				delete_option( $option->option_name );
			}
		}
	}
}
