<?php
/**
 * Plugin Name: Edu Gap Custom Blocks 2
 * Plugin URI: https://www.heyroboto.com
 * Description: Custom block exclusively for Edu Gap website only
 * Author: Rayneil Reyes
 * Author URI: https://www.heyroboto.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
