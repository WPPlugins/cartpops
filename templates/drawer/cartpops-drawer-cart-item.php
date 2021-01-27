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

?>

<div class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>">

	<div class="cpops-cart-item__container">
		<div class="cpops-cart-item__image">
			<?php echo wp_kses_post( $cpops_thumbnail ); ?>
		</div>

		<div class="cpops-cart-item__product">

			<div class="cpops-cart-item__details">
				<div class="cpops-cart-item__product--name"><?php echo $cpops_product_name; ?></div>
			</div>

			<div class="cpops-cart-item__quantity-selector">

				<div class="cpops-cart-item__quantity">
					<button class="quantity__button--down" data-to="p-<?php echo $cpops_product_id; ?>">
						<svg aria-hidden="true" focusable="false" role="presentation" class="cpops-icon" viewBox="0 0 20 20"><path fill="#444" d="M17.543 11.029H2.1A1.032 1.032 0 0 1 1.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"></path></svg>
						<span class="cpops-sr-only" aria-hidden="true">−</span>
					</button>
					<span aria-label="Quantity" data-key="<?php echo $cpops_cart_item_key; ?>" id="p-<?php echo $cpops_product_id; ?>"><?php echo $cpops_cart_item['quantity']; ?></span>
					<button class="quantity__button--up" data-to="p-<?php echo $cpops_product_id; ?>">
						<svg aria-hidden="true" focusable="false" role="presentation" class="cpops-icon" viewBox="0 0 20 20"><path fill="#444" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg>
						<span class="cpops-sr-only" aria-hidden="true">+</span>
					</button>
				</div>

			</div>

		</div>
	</div>

	<div class="cpops-cart-item__actions">
		<button aria-label="Remove Item From Cart" class="cpops-cart-item__actions--remove" data-key="<?php echo esc_html( $cpops_cart_item_key ); ?>
		">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
				<defs/>
				<path d="M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"/>
			</svg>
		</button>
		<div class="cpops-cart-item__actions--pricing">
			<div class="cpops-price"><?php echo $cpops_product_subtotal; ?></div>
		</div>
	</div>
</div>
