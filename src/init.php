<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function edugap_sidebar_plugin_register() {
    wp_register_script(
        'plugin-sidebar-js',
        plugins_url( '/plugins/index.js', __FILE__ ),
		array( 'wp-plugins', 'wp-edit-post', 'wp-element' ),
		null,
		null
    );
}

add_action( 'init', 'edugap_sidebar_plugin_register' );

function edugap_sidebar_plugin_script_enqueue() {
    wp_enqueue_script( 'plugin-sidebar-js' );
}

add_action( 'enqueue_block_editor_assets', 'edugap_sidebar_plugin_script_enqueue' );

function edugap_block_category($categories, $post){
	return array_merge(
		$categories,
		array(
			array(
				'slug'=>'edugap-category',
				'title'=>__('Edu Gap Blocks','edugap'),
				'icon'=> 'dashicons-welcome-learn-more',
			)
		)
	);
}

add_filter( 'block_categories', 'edugap_block_category', 10, 2);

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function edugap_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'edugap_cgb-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'edugap_cgb-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'edugap_cgb-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'edugap/block-edugap-cgb', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'edugap_cgb-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'edugap_cgb-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'edugap_cgb-cgb-block-editor-css',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'edugap_cgb_block_assets' );
