<?php
/**
 * Plugin Name:     Pagespeed Webpack Plugin by Strawanzer
 * Description:     Compiles needed and removes unneded CSS and JS
 * Author:          Michael Ringlen
 * Author URI:      https://strawanzer.online/
 * Version:         1.0.0
 */

add_action( 'wp_enqueue_scripts', 'webpack_js');

function webpack_js() {
    wp_register_script( 'webpack-js', plugin_dir_url( __FILE__ ) . 'assets/js/public.min.js', array( 'jquery' ), '', true );
    wp_enqueue_script( 'webpack-js' );

}