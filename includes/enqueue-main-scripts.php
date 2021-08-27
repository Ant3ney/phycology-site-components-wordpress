<?php
function enqueue_main_scrips(){
    /* Styles */
    wp_enqueue_style('bootstrap_style.css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css', false);
    wp_enqueue_style( 'index.css', get_template_directory_uri() . '/assets/css/index.css', false, time() );

    /* Scripts */
    /* Scripts */
    wp_enqueue_script("jquery");
    wp_enqueue_script( '0d4692f1c3', 'https://kit.fontawesome.com/0d4692f1c3.js', false );
    wp_enqueue_script( 'popper', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js', false );
    wp_enqueue_script( 'index.js', get_template_directory_uri() . '/assets/js/index.js', false, time() );
    
}