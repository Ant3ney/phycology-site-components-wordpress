<?php
//incldes
include(get_theme_file_path('/includes/enqueue-main-scripts.php'));

//Hooks
add_action( 'wp_enqueue_scripts', 'enqueue_main_scrips', -10 );
function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
}
add_action('get_header', 'remove_admin_login_header');