<?php
/**
 * CartPops Cart Totals
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>">
	<div class="cpops-cart-total__subtotal <?php echo empty( $coupon ) ? 'hide' : ''; ?>">
		<span><?php echo esc_html_e( 'Subtotal', 'cartpops' ); ?></span>
		<span class="cpops-cart-total__subtotal-price"><?php echo wp_kses_post( $subtotal ); ?></span>
	</div>
	<div class="cpops-cart-total__discount <?php echo empty( $coupon ) ? 'hide' : ''; ?>">
		<span><?php echo esc_html_e( 'Discount', 'cartpops' ); ?></span>
		<span class="cpops-cart-total__discount-value"><?php echo wp_kses_post( $discount ); ?></span>
	</div>
	<div class="cpops-cart-total__total">
		<span><?php echo esc_html_e( 'Total', 'cartpops' ); ?></span>
		<span class="cpops-cart-total__total-price"><?php echo wp_kses_post( $total ); ?></span>
	</div>
	<div class="wc-proceed-to-checkout">
		<a class="checkout-button wc-forward" href="<?php echo esc_url( $url ); ?>"><?php echo esc_html( $button_text ); ?></a>
	</div>
</div>
