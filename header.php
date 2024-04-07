<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <meta name="keywords" content="ключевые, слова, можно словосочетаниями, короткими ёмкими фразами, нужно для поисковых систем, но едва ли, но пусть будет">
    <meta name="description" content="<?php echo get_post_meta( get_the_ID(), '_yoast_wpseo_metadesc', true ); ?>">
    <meta name="theme-color" content="#fff">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicons/favicon.ico" type="image/x-icon">
    <link rel="icon" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/favicons/favicon-16x16.png" type="image/png">
    <link rel="icon" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/favicons/favicon-32x32.png" type="image/png">
    <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-precomposed.png">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="167x167" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-167x167.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="1024x1024" href="<?php echo get_template_directory_uri(); ?>/img/favicons/apple-touch-icon-1024x1024.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;family=Noto+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body>
<div class="layout">
    <header class="header" id="up"><a class="logo">
            <h1>ООО Эко Техник Консалтинг<br>Eco Technics Consulting LLC</h1>
            <h2><?php echo get_field('caption'); ?></h2>
        </a>
        <nav class="header-menu">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'header-menu',
                'menu_id'        => 'header-menu',
                'menu_class'     => 'header-menu__list',
                'container'      => false,
                'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'walker'         => new Walker_Nav_Primary()
            ) );
            ?>
        </nav>
        <div class="burger" aria-label="Open the menu">
            <div class="burger__inner">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </header>