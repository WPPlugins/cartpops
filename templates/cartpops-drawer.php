<?php
/**
 * CartPops Drawer
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div id="cpops-drawer-modal" class="cpops-modal">
	<div id="cartpops-drawer" class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>" <?php echo cartpops_implode_html_attributes( $attributes ); ?>>
		<div class="cpops-panel">
			<?php do_action( 'cartpops_drawer_wrapper_start' ); ?>
			<?php do_action( 'cartpops_drawer_inside' ); ?>
			<?php do_action( 'cartpops_drawer_wrapper_end' ); ?>
		</div>
	</div>
</div>
