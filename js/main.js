/******/ (function() { // webpackBootstrap
    /******/ 	var __webpack_modules__ = ({

        /***/ "./src/blocks/components/action-btns/action-btns.js":
        /*!**********************************************************!*\
          !*** ./src/blocks/components/action-btns/action-btns.js ***!
          \**********************************************************/
        /***/ (function() {

            var btnUp = document.querySelector('.action-btns-up');
            if (btnUp) {
                btnUpOffset();
            }
            function btnUpOffset() {
                window.addEventListener('scroll', function () {
                    if (window.pageYOffset > 400) {
                        btnUp.style.display = 'block';
                        btnUp.style.opacity = '1';
                    } else {
                        btnUp.style.opacity = '';
                        btnUp.style.display = '';
                    }
                });
            }

            /***/ }),

        /***/ "./src/blocks/components/burger/burger.js":
        /*!************************************************!*\
          !*** ./src/blocks/components/burger/burger.js ***!
          \************************************************/
        /***/ (function() {

            var burger = document.querySelector('.burger');
            if (burger) {
                burgerScripts();
            }
            function burgerScripts() {
                var headerMenu = document.querySelector('.header-menu'),
                    burgerInner = burger.querySelector('.burger__inner'),
                    menuItem = document.querySelectorAll('.header-menu__item');

                // const dropDown = document.querySelector('.dropdown'),
                //     dropItems = document.querySelector('.dropdown__items'),
                //     dropItem = document.querySelectorAll('.dropdown__item');

                burgerListener();
                burgerCloseKeyDown();
                menuItemIteration();

                // dropdownInBurger(dropItem, dropItems);

                function overflowMenu() {
                    if (burgerInner.classList.contains('burger__inner--active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                }
                function removeMenuActive() {
                    burgerInner.classList.remove('burger__inner--active');
                    headerMenu.classList.remove('header-menu--active');
                    overflowMenu();
                }
                function burgerListener() {
                    burger.addEventListener('click', function () {
                        headerMenu.classList.toggle('header-menu--active');
                        burgerInner.classList.toggle('burger__inner--active');

                        // dropDown.classList.add('dropdown-burger');

                        overflowMenu();
                    });
                }
                function burgerCloseKeyDown() {
                    document.addEventListener('keydown', function (event) {
                        if (event.code === 'Escape' && burgerInner.classList.contains('burger__inner--active')) {
                            removeMenuActive();
                        }
                    });
                }
                function menuItemIteration() {
                    menuItem.forEach(function (item, i) {
                        item.addEventListener('click', function () {
                            if (!menuItem[i].querySelector('.dropdown')) {
                                removeMenuActive();
                            }
                        });
                    });
                }

                // function dropdownInBurger(dropdownItem, dropDownItems) {
                //     dropdownItem.forEach((item) => {
                //         item.addEventListener('click', () => {
                //             removeMenuActive();
                //             dropDownItems.style.display = 'none';
                //         });
                //     });
                // }
            }

            /***/ }),

        /***/ "./src/blocks/components/img/img.js":
        /*!******************************************!*\
          !*** ./src/blocks/components/img/img.js ***!
          \******************************************/
        /***/ (function() {

            var imageObserver = new IntersectionObserver(function (entries, options) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        if (entry.target.dataset.src !== undefined && entry.target.dataset.src !== null) {
                            entry.target.src = entry.target.dataset.src;
                        }
                        if (entry.target.dataset.srcset !== undefined && entry.target.dataset.srcset !== null) {
                            entry.target.srcset = entry.target.dataset.srcset;
                        }
                        if (entry.target.dataset.alt !== undefined && entry.target.dataset.alt !== null) {
                            entry.target.alt = entry.target.dataset.alt;
                        }
                        imageObserver.unobserve(entry.target);
                    }
                });
            }, {});
            document.querySelectorAll('img, source').forEach(function (el) {
                return imageObserver.observe(el);
            });

            /***/ }),

        /***/ "./src/blocks/components/modal/modal.js":
        /*!**********************************************!*\
          !*** ./src/blocks/components/modal/modal.js ***!
          \**********************************************/
        /***/ (function() {

            var modal = document.querySelector('.modal'),
                modalTrigger = document.querySelectorAll('[data-modal]'),
                modalCloseBtn = document.querySelector('[data-close]');
            if (modal) {
                modalScripts();
            }
            function modalScripts() {
                modalTrigger.forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        modal.classList.add('modal__show');
                        modal.classList.remove('modal__hide');
                        document.body.style.overflow = 'hidden';
                    });
                });
                function closeModal() {
                    modal.classList.add('modal__hide');
                    modal.classList.remove('modal__show');
                    document.body.style.overflow = '';
                }
                modalCloseBtn.addEventListener('click', closeModal);
                modal.addEventListener('click', function (event) {
                    if (event.target === modal) {
                        closeModal();
                    }
                });
                document.addEventListener('keydown', function (event) {
                    if (event.code === 'Escape' && modal.classList.contains('modal__show')) {
                        closeModal();
                    }
                });
            }

            /***/ }),

        /***/ "./src/blocks/modules/footer/footer.js":
        /*!*********************************************!*\
          !*** ./src/blocks/modules/footer/footer.js ***!
          \*********************************************/
        /***/ (function() {



            /***/ }),

        /***/ "./src/blocks/modules/header/header.js":
        /*!*********************************************!*\
          !*** ./src/blocks/modules/header/header.js ***!
          \*********************************************/
        /***/ (function() {



            /***/ }),

        /***/ "./src/blocks/modules/main/main.js":
        /*!*****************************************!*\
          !*** ./src/blocks/modules/main/main.js ***!
          \*****************************************/
        /***/ (function() {



            /***/ }),

        /***/ "./src/blocks/modules/our-activity-slider/our-activity-slider.js":
        /*!***********************************************************************!*\
          !*** ./src/blocks/modules/our-activity-slider/our-activity-slider.js ***!
          \***********************************************************************/
        /***/ (function() {

// import Swiper, {navigation} from 'swiper';
//
// const activitySlider = new Swiper('.our-activity-slider', {
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     spaceBetween: 30,
//     centeredSlides: true,
// })

            /***/ }),

        /***/ "./src/js/import/components.js":
        /*!*************************************!*\
          !*** ./src/js/import/components.js ***!
          \*************************************/
        /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _components_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/action-btns/action-btns */ "./src/blocks/components/action-btns/action-btns.js");
            /* harmony import */ var _components_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_action_btns_action_btns__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
            /* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/img/img */ "./src/blocks/components/img/img.js");
            /* harmony import */ var _components_img_img__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_img_img__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/modal/modal */ "./src/blocks/components/modal/modal.js");
            /* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal__WEBPACK_IMPORTED_MODULE_3__);
//! Basic






//! Other

            /***/ }),

        /***/ "./src/js/import/modules.js":
        /*!**********************************!*\
          !*** ./src/js/import/modules.js ***!
          \**********************************/
        /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
            /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
            /* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _modules_our_activity_slider_our_activity_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/our-activity-slider/our-activity-slider */ "./src/blocks/modules/our-activity-slider/our-activity-slider.js");
            /* harmony import */ var _modules_our_activity_slider_our_activity_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_our_activity_slider_our_activity_slider__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
            /* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);





            /***/ })

        /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/ 	!function() {
        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
        /******/ 		__webpack_require__.n = function(module) {
            /******/ 			var getter = module && module.__esModule ?
                /******/ 				function() { return module['default']; } :
                /******/ 				function() { return module; };
            /******/ 			__webpack_require__.d(getter, { a: getter });
            /******/ 			return getter;
            /******/ 		};
        /******/ 	}();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	!function() {
        /******/ 		// define getter functions for harmony exports
        /******/ 		__webpack_require__.d = function(exports, definition) {
            /******/ 			for(var key in definition) {
                /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ 				}
                /******/ 			}
            /******/ 		};
        /******/ 	}();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	!function() {
        /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
        /******/ 	}();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	!function() {
        /******/ 		// define __esModule on exports
        /******/ 		__webpack_require__.r = function(exports) {
            /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ 			}
            /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 		};
        /******/ 	}();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
    !function() {
        "use strict";
        /*!*************************!*\
          !*** ./src/js/index.js ***!
          \*************************/
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
        /* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");


    }();
    /******/ })()
;
//# sourceMappingURL=main.js.map