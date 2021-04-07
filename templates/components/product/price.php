<?php
/**
 * CartPops Price
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="cpops-cart-item__actions--pricing">
	<div class="cpops-price">
		<?php echo cpops_frontend_helper()->get_item_price( $product, $cart_item, $cart_item_key ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
</div>
