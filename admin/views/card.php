<div class="<?php echo esc_html( implode( ' ', array_filter( $card_classes ) ) ); ?>">
	<div class="card-content">
		<div class="card-head">
			<h2><i data-feather="<?php echo esc_attr( $icon ); ?>"></i> <?php echo esc_attr( $title ); ?>
				<?php
				if ( true === $paid && fs_cartpops()->is_not_paying() ) {
					echo '<span class="cpops-tag is-dark">Pro</span>';
				}
				?>
			</h2>
			<?php if ( $option_group && $section_options ) : ?>
			<button name="submit" type="submit" class="cpops-button primary-button small-button"><?php echo esc_attr( __( 'Save Settings', 'cartpops' ) ); ?></button>
			<?php endif; ?>
		</div>
		<div class="card-inside">
			<table class="form-table" role="presentation">
				<?php if ( $partial ) : ?>
					<?php require_once "{$partial}.php"; ?>
				<?php endif; ?>
				<?php if ( $option_group && $section_options ) : ?>
					<?php do_settings_fields( $option_group, $section_options ); ?>
				<?php endif; ?>
			</table>
		</div>
	</div>
</div>
