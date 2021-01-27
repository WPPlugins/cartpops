<?php
/**
 * CartPops Drawer Inside
 *
 * @package     CartPops\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<div class="cpops-drawer-header">
	<?php do_action( 'cartpops_drawer_header' ); ?>
</div>

<div class="cpops-drawer-cart">
	<?php do_action( 'cartpops_drawer_cart_contents' ); ?>
</div>

<div class="cpops-drawer-footer">
	<?php do_action( 'cartpops_drawer_coupon_form' ); ?>
	<?php do_action( 'cartpops_drawer_recommendations' ); ?>
	<?php do_action( 'cartpops_drawer_totals' ); ?>
	<?php do_action( 'cartpops_powered_by' ); ?>
</div>
