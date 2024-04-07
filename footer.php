<footer class="footer">
    <div class="contact-us">
        <h3>Как с нами связаться</h3>
        <div class="contact-us__items">ООО «Эко Техник Консалтинг»<br>Адрес: Россия, г. Москва, Ленинградский проспект, <br>д. 37, корп. 3, офис 1024<br>Тел. <a href="tel:+74957853383">+7 (495) 785 33 83</a> <br>email: <a href="mailto:etc@ecotc.com">etc@ecotc.com</></a></div>
    </div>
</footer>
<div class="modal">
    <div class="modal__inner">
        <div class="modal__content">
            <div class="modal__button--wrapper" data-close>
                <button class="modal__button" id="modal__button" type="button"></button>
            </div><img data-src="<?php echo get_template_directory_uri(); ?>/img/diagram.png" data-alt="Диаграмма">
        </div>
    </div>
</div>
<div class="action-btns">
    <div class="action-btns__inner">
        <div class="action-btns__button action-btns-up"><a href="#up">
                <button type="button">
                    <svg class="arrow">
                        <use xlink:href=<?php echo get_template_directory_uri(); ?>/img/sprites/sprite.svg#arrow"></use>
                    </svg>
                </button></a></div>
        <div class="action-btns__button action-btns-call"><a href="#" target="_blank">
                <button type="button">
                    <svg class="phone">
                        <use xlink:href=<?php echo get_template_directory_uri(); ?>/img/sprites/sprite.svg#phone"></use>
                    </svg>
                </button></a></div>
    </div>
</div>
</div>
<?php wp_footer(); ?>
</body>
</html>