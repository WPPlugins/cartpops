<?php
/**
 * CartPops Cart Item
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$args = array(
	'cart_item_key' => $cart_item_key,
	'cart_item'     => $cart_item,
	'product'       => $product,
);

?>

<div class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>" data-key="<?php echo esc_html( $cart_item_key ); ?>">

	<div class="cpops-cart-item__container">
		<div class="cpops-cart-item__image">
			<?php echo wp_kses_post( $cpops_thumbnail ); ?>
		</div>

		<div class="cpops-cart-item__product">

			<div class="cpops-cart-item__details">
				<div class="cpops-cart-item__product--name"><?php echo $cpops_product_name; ?></div>
			</div>

			<?php if ( $quantity ) : ?>
				<?php echo $quantity; ?>
			<?php endif; ?>
		</div>
	</div>

	<div class="cpops-cart-item__actions">
		<button aria-label="Remove Item From Cart" class="cpops-cart-item__actions--remove" data-key="<?php echo esc_html( $cart_item_key ); ?>">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
				<defs/>
				<path d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/>
			</svg>
		</button>

		<?php
			cpops_frontend_helper()->get_template( 'components/product/price', $args );
		?>
	</div>
</div>
