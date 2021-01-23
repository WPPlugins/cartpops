<?php
/**
 * Issues
 *
 * @package     CartPops\Admin\Templates
 * @version     1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$issue_list = $this->get_potential_issues();

?>


<table class="form-table">
	<thead>
		<tr>
			<th>Issue</th>
			<th>What to do</th>
		</tr>
	</thead>
	<tbody>
		<?php if( is_array( $issue_list ) ) : ?>

			<?php foreach ( $issue_list as $key => $issue ) : ?>
				<tr>
					<td class="cpops-issues-error">
						<div class="status-indicator status-indicator--danger status-indicator--sm  status-indicator--infinite">
							<div class="circle circle--animated circle-main"></div>
							<div class="circle circle--animated circle-secondary"></div>
							<div class="circle circle--animated circle-tertiary"></div>
						</div>
						<div class="cpops-issues-error__description">
							<p><?php echo wp_kses_post( $issue['error'] ); ?></p>
						</div>
					</td>
					<td><?php echo wp_kses_post( $issue['fix'] ); ?></td>
				</tr>
			<?php endforeach; ?>
		<php else : ?>
			<tr>
				<td class="cpops-issues-error">
					<div class="status-indicator status-indicator--sm js-status-indicator status-indicator--success">
						<div class="circle circle--animated circle-main"></div>
						<div class="circle circle--animated circle-secondary"></div>
						<div class="circle circle--animated circle-tertiary"></div>
					</div>
					<div class="cpops-issues-error__description">
						<p><?php esc_html_e( 'No issues were found', 'cartpops' ); ?></p>
					</div>
				</td>
				<td><p><?php esc_html_e( 'No action needed.', 'cartpops' ); ?></p></td>
			</tr>
		<?php endif; ?>
	</tbody>
</table>
