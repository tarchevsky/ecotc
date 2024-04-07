<?php

function mytheme_enqueue_styles() {
    wp_enqueue_style( 'mytheme-styles', get_template_directory_uri() . '/styles/main.css', [], '1.0.0' );
}

add_action( 'wp_enqueue_scripts', 'mytheme_enqueue_styles' );



function add_my_scripts() {
    wp_enqueue_script( 'script-one', get_template_directory_uri() . '/js/vendor.js', array ( 'jquery' ), 1.1, true);
    wp_enqueue_script( 'script-two', get_template_directory_uri() . '/js/main.js', array ( 'jquery' ), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'add_my_scripts' );


function register_my_menu() {
    register_nav_menu('header-menu',__( 'Основное меню' ));
}

add_action( 'init', 'register_my_menu' );

class Walker_Nav_Primary extends Walker_Nav_menu {
    function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
        $output .= "<li class=\"header-menu__item\">";
        $output .= '<a href="' . $item->url . '">';
        $output .= $item->title;
        $output .= '</a>';
    }

    function end_el( &$output, $item, $depth = 0, $args = array() ) {
        $output .= "</li>\n";
    }
}

?>