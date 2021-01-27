<?php
/**
 * CartPops Drawer Coupon Form
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>">
	<span><?php echo __( 'Got a discount code?', 'cartpops' ); ?></span>
	<form id="cpops-coupon-submit">
		<div class="cpops-drawer-coupon__input">
			<input type="text" id="cpops-coupon-input" placeholder="<?php esc_html_e( 'Enter discount code', 'cartpops' ); ?>" required>
			<button type="submit" class=" cpops-coupon-submit"><?php esc_html_e( 'Apply', 'cartpops' ); ?></button>
		</div>
	</form>
	<div class="cpops-coupon-remove">
		<?php do_action( 'cartpops_drawer_coupon_removal' ); ?>
	</div>
</div>
