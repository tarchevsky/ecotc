<?php get_header(); ?>
    <div class="content">
        <main class="main layout-none">
            <img class="img__empty" data-src="<?php echo get_template_directory_uri(); ?>/img/scheme-main.png"
                 data-alt="Схема, рассказывающая о философии, ценностях и принципах Eco-Technics Consulting LLC">
            <h3><?php echo get_field('slogan'); ?></h3>
            <div class="we-integrate"><img data-src="<?php echo get_template_directory_uri(); ?>/img/planet.png"
                                           data-alt="Планета Земля">
                <div>
                    <p><?php echo get_field('what-we-do'); ?></p>
                    <div class="button <?php if (is_page('Home')) {
                        echo 'we-integrate__button--eng';
                    } else {
                        echo 'we-integrate__button';
                    } ?>"><a><?php echo get_field('scheme-button'); ?></a></div>
                </div>
            </div>
        </main>
        <div class="our-activity layout-none">
            <h3><?php echo get_field('our-activity-title'); ?></h3>
            <?php
            $image = get_field('our-activity_scheme');
            if (!empty($image)): ?>
                <img data-src="<?php echo esc_url($image['url']); ?>"
                     data-alt="<?php echo esc_attr($image['alt']); ?>"/>
            <?php endif; ?>
            <p><?php echo get_field('our-activity'); ?></p>
        </div>
        <div class="our-activity-points">
            <div class="our-activity-points__row">

                <?php if (have_rows('our-activity-points')): ?>
                    <?php while (have_rows('our-activity-points')): the_row();

                        // переменные
                        $image = get_sub_field('img');
                        $number = get_sub_field('number');
                        $text = get_sub_field('text');

                        ?>

                        <div class="our-activity-points-point">
                            <?php if (!empty($image)): ?>
                                <img data-src="<?php echo $image; ?>" data-alt="">
                            <?php else: ?>
                                <div></div>
                            <?php endif; ?>
                            <div class="our-activity-points-point__text">
                                <div><?php echo $number; ?></div>
                                <p><?php echo $text; ?></p>
                            </div>
                        </div>

                    <?php endwhile; ?>
                <?php endif; ?>

            </div>
        </div>
        <div class="consulting">
            <h3><?php echo get_field('consulting-title'); ?></h3>
        </div>
        <div class="consulting__row layout-none">
            <img data-src="<?php echo get_template_directory_uri(); ?>/img/consulting-cover.png" data-alt="Консалтинг">
            <div class="consulting-text">
                <p><?php echo get_field('consulting-subtitle'); ?></p>
                <p><?php echo get_field('consulting-text'); ?></p>
            </div>
        </div>
        <div class="our-clients layout-none">
            <h4><?php echo get_field('our-clients-title'); ?></h4>
        </div>
        <div class="our-clients__row"><a href="">
                <img data-src="<?php echo get_template_directory_uri(); ?>/img/luk.png" data-alt="Клиент - Лукойл"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/kazmungaz.png"
                        data-alt="Клиент - Казмунайгаз"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/rosneft.png"
                        data-alt="Клиент - Росефть"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/gazprom.png"
                        data-alt="Клиент - Газпром"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/neftehim.png"
                        data-alt="Клиент - Нефтехим"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/mvk.png"
                        data-alt="Клиент - Мосводоканал"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/sayan.png"
                        data-alt="Клиент - Саян"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/enter.png" data-alt="Клиент - Энтер"></a><a
                    href=""><img data-src="<?php echo get_template_directory_uri(); ?>/img/rusal.png"
                                 data-alt="Клиент - Русал"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/sibur.png" data-alt="Клиент - Сибур"></a><a
                    href="">
                <img style="padding: 25px;" data-src="<?php echo get_template_directory_uri(); ?>/img/severstal.png"
                                 data-alt="Клиент - Северсталь"></a><a href=""><img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/polymetall.jpeg"
                        data-alt="Клиент - Полиметалл">
            </a>
            <a href="">
                <img
                        data-src="<?php echo get_template_directory_uri(); ?>/img/nlmk.jpeg"
                        data-alt="Клиент - НЛМК">
            </a>
        </div>
    </div>

<?php get_footer(); ?>