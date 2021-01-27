<?php
/**
 * CartPops Drawer Recommendations
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="<?php echo esc_html( implode( ' ', array_filter( $classes ) ) ); ?>">
	<div class="cpops-drawer-recommendations__header">
		<?php echo esc_html( $title ); ?>
	</div>

	<div class="swiper-container" id="cpops-drawer-recommendations__slider">
		<div class="swiper-wrapper">

			<?php foreach ( $recommended_products as $key => $recommended_product ) : ?>

				<div class="cpops-cart-item swiper-slide">

					<div class="cpops-cart-item__container">

						<div class="cpops-cart-item__image">
							<img src="<?php echo wp_get_attachment_image_url( $recommended_product->get_image_id(), 'thumbnail' ); ?>" />
						</div>

						<div class="cpops-cart-item__product">

							<div class="cpops-cart-item__details">
								<div class="cpops-cart-item__product--name"><a href="<?php echo $recommended_product->get_permalink(); ?>"><?php echo $recommended_product->get_name(); ?></a></div>
								<div class="cpops-cart-item__slider-pricing">
									<?php if ( $recommended_product->get_sale_price() ) : ?>
										<div class="cpops-cart-item__slider-pricing--sale"><?php echo wc_price( $recommended_product->get_regular_price() ); ?></div>
									<?php endif; ?>
									<div class="cpops-cart-item__slider-pricing--price"><?php echo wc_price( $recommended_product->get_price() ); ?></div>
								</div>
							</div>

						</div>

					</div>

					<div class="cpops-cart-item__actions">
						<div class="cpops-add-to-cart" data-pid="<?php echo $recommended_product->get_id(); ?>">
							<button type="button" data-cpops-type="recommendation" value="<?php echo $recommended_product->get_id(); ?>" data-product_id="<?php echo $recommended_product->get_id(); ?>" class="cpops-btn-plus add_to_cart_button">
									<svg aria-hidden="true" focusable="false" role="presentation" class="cpops-icon" viewBox="0 0 20 20"><path fill="#444" d="M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"></path></svg>
							</button>
						</div>
					</div>

				</div>

			<?php endforeach; ?>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</div>

<script>
	jQuery(document).ready( function($) {
		if( $('#cpops-drawer-recommendations__slider').length ){

			const myswiper = new Swiper('#cpops-drawer-recommendations__slider',{
				autoplayDisableOnInteraction: false,
				observer: true,
				observeParents: true,
				draggable: false,

				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				breakpoints: {
					600: {
						touchRatio: 1
					},
					768: {
						touchRatio: 0
					}
				},
			})

		}
	});
</script>
