<?php
class CartPops_Frontend_Helpers {

	protected static $_instance = null;
	private static $instance;

	private $plugin_name;
	private $version;

	private function __construct() {

	}

	public static function get_instance() {

		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * The plugin path
	 *
	 * @param string $dir
	 * @param string $file
	 *
	 * @return    string    The plugin path.
	 * @since     1.0.0
	 */
	public static function plugin_path( $dir = null, $file = null ) {
		$path = CARTPOPS_PATH;
		if ( ! empty( $dir ) ) {
			$path .= $dir . '/';
		}
		if ( ! empty( $file ) ) {
			$path .= $file;
		}
		return $path;
	}

	/**
	 * Get plugin template
	 *
	 * @param string $slug
	 *
	 * @return    string    The template
	 * @since     1.0.0
	 */
	public static function get_plugin_template( $slug ) {
		$plugin_path = self::plugin_path();
		$template    = null;

		// Get default slug.php.
		if ( file_exists( $plugin_path . "templates/{$slug}.php" ) ) {
			$template = $plugin_path . "templates/{$slug}.php";
		}

		return $template;
	}

	/**
	 * The plugin theme templates path
	 *
	 * @return    string    The plugin theme templates path.
	 * @since     1.0.0
	 */
	public static function template_path() {
		return apply_filters( 'cartpops_template_path', CARTPOPS_PREFIX . '/' );
	}

	/**
	 * Get plugin template within active theme
	 *
	 * @param string $slug
	 *
	 * @return    string    The template
	 * @since     1.0.0
	 */
	public static function get_theme_template( $slug ) {

		// Look in your theme
		$template_path = self::template_path();

		$template = locate_template( array( $template_path . "{$slug}.php" ) );

		return $template;
	}

	/**
	 * Get plugin template. Look within the plugin and active theme
	 *
	 * @param string $slug
	 * @param array  $vars
	 * @param bool   $return
	 * @param bool   $locateOnly
	 *
	 * @return    string    The template
	 * @since     1.0.0
	 */
	public static function get_template( $slug, $args = array(), $return = false, $locate_only = false ) {

		$template = null;

		if ( ! CARTPOPS_TEMPLATE_DEBUG_MODE ) {
			$template = self::get_theme_template( $slug );
		}

		if ( empty( $template ) ) {
			$template = self::get_plugin_template( $slug );
		}

		// Allow 3rd party plugins to filter template file from their plugin.
		$template = apply_filters( 'cartpops_template', $template, $slug );

		if ( $locate_only ) {
			return $template;
		}

		if ( $template ) {
			extract( $args ); // phpcs:ignore

			if ( $return ) {
				ob_start();
				require $template;
				return ob_get_clean();
			} else {
				require $template;
				return '';
			}
		}

	}

	/**
	 * @param $product
	 * @param $cart_item
	 * @param $cart_item_key
	 *
	 * @return mixed|void
	 */
	public static function get_item_price( &$product, &$cart_item, $cart_item_key ) {
		$price         = '';
		$onsale        = $product->is_on_sale();
		$slashed_price = $product->get_price_html();
		$display       = apply_filters( 'cartpops_cart_item_price_display', 'subtotal' );

		if ( 'subtotal' === $display ) {
			$quantity = self::get_quantity( $cart_item, $cart_item_key );
			$price    = apply_filters(
				'woocommerce_cart_item_subtotal',
				WC()->cart->get_product_subtotal( $product, $quantity ),
				$cart_item,
				$cart_item_key
			);
		} else {
			$price = apply_filters(
				'woocommerce_cart_item_price',
				WC()->cart->get_product_price( $product ),
				$cart_item,
				$cart_item_key
			);
		}

		return $price;
	}

	/**
	 * @param $product
	 * @param $cart_item
	 * @param $cart_item_key
	 *
	 * @return mixed|void
	 */
	public static function get_product_image( &$product, &$cart_item, $cart_item_key ) {
		return apply_filters(
			'woocommerce_cart_item_thumbnail',
			$product->get_image(),
			$cart_item,
			$cart_item_key
		);
	}

	/**
	 * @param $cart_item
	 * @param $cart_item_key
	 *
	 * @return string
	 */
	public static function get_quantity( &$cart_item, $cart_item_key ) {
		return $cart_item['quantity'];
	}

	/**
	 * @param $cart_item
	 * @param $cart_item_key
	 *
	 * @return WC_Product
	 */
	public static function cart_item_product( &$cart_item, $cart_item_key ) {
		return apply_filters(
			'woocommerce_cart_item_product',
			$cart_item['data'],
			$cart_item,
			$cart_item_key
		);
	}

	/**
	 * Helper fuction to get the product name.
	 *
	 * @param object $cart_item Single cart item.
	 * @param string $cart_item_key Single cart key.
	 * @return string
	 */
	public static function get_product_name( $cart_item, $cart_item_key ) {

		$html              = '';
		$_product          = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
		$product_id        = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );
		$product_permalink = apply_filters( 'woocommercee_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );

		$html .= '<div class="cpops-cart-item__product--link">';

		if ( ! $product_permalink ) {
			$html .= wp_kses_post(
				apply_filters(
					'woocommerce_cart_item_name',
					$_product->get_name(),
					$cart_item,
					$cart_item_key
				) . '&nbsp;'
			);
		} else {
			$html .= wp_kses_post(
				apply_filters(
					'woocommerce_cart_item_name',
					sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ),
					$cart_item,
					$cart_item_key
				)
			);
		}

		$html .= '</div>';

		$html .= self::after_product_name( $cart_item, $cart_item_key );

		// Backorder notification.
		if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
			$html .= wp_kses_post( apply_filters( 'woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'cartpops' ) . '</p>', $product_id ) ); // phpcs:ignore
		}

		return $html;

	}

	/**
	 * Returns the neccessary hooks and data after the product name in a collapsable section (or not).
	 *
	 * @param object $cart_item WooCommerce cart item object.
	 * @param string $cart_item_key WooCommerce cart item key.
	 * @author Chris Jayden <help@cartpops.com>
	 */
	private static function after_product_name( &$cart_item, $cart_item_key ) {
		$collapsible       = '';
		$html              = '';
		$cart_item_data    = wc_get_formatted_cart_item_data( $cart_item );
		$_product          = $cart_item['data'];
		$slashed_price     = $_product->get_price_html();
		$view_details_text = cartpops_get_option( 'view_details_text' );
		$view_details_text = ( ! empty( $view_details_text ) ) ? $view_details_text : __( 'View details', 'cartpops' );

		if ( apply_filters( 'cartpops_after_cart_item_name_hook_collapsible', true ) ) {
			ob_start();
			do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );
			$collapsible .= ob_get_clean();
		} else {
			do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );
		}

		if ( apply_filters( 'cartpops_after_cart_item_name_price', false ) ) {
			$html .= '<div class="cpops-cart-item__product--single-price">' . $slashed_price . '</div>';
		}

		// Gets and formats a list of cart item data + variations for display on the frontend.
		if ( $cart_item_data ) {
			$collapsible .= '<h5 class="">' . __( 'Product details', 'cartpops' ) . '</h5>';
			$collapsible .= $cart_item_data;
		}

		if ( $collapsible ) {
			$html .= '<span class="cpops-collapse-btn-link" data-cpops-toggle="collapse" data-cpops-target=".cpops-collapse-' . esc_attr( $cart_item_key ) . '" role="button" aria-expanded="false">' . $view_details_text . '</span>';
			$html .= '<div class="cpops-cart-item__product--data cpops-collapse cpops-collapse-' . esc_attr( $cart_item_key ) . '">';
			$html .= $collapsible; // phpcs:ignore
			$html .= '</div>';
		}

		return $html;
	}

	public static function set_cart_constant() {
		wc_maybe_define_constant( 'WOOCOMMERCE_CART', true );
	}


}

/**
 * Get an instance of the frontend help class for use globally.
 *
 * @author Chris Jayden <help@cartpops.com>
 */
function cpops_frontend_helper() {
	return CartPops_Frontend_Helpers::get_instance();
}

cpops_frontend_helper();
