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
	<span><?php echo esc_html( $title ); ?></span>
	<form class="cpops-coupon-form">
		<div class="cpops-drawer-coupon__input">
			<input type="text" id="cpops-coupon-input" placeholder="<?php echo esc_html( $placeholder_text ); ?>" required>
			<button type="submit" class="cpops-drawer-form__button cpops-button"><?php echo esc_html( $button_text ); ?></button>
		</div>
	</form>
	<div class="cpops-coupon-remove">
		<?php do_action( 'cartpops_drawer_coupon_removal' ); ?>
	</div>
</div>
