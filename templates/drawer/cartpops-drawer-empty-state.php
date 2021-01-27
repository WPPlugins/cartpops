<?php
/**
 * CartPops Drawer Empty State
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>">
	<h2><?php echo esc_html( $headline ); ?></h2>
	<p><?php echo esc_html( $subheader ); ?></p>
</div>
