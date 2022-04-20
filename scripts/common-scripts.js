(function (e) {
    "use strict";

    function i(t, n) {
        this.opts = e.extend({
            handleKeys: !0,
            scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, n);
        this.$container = t;
        this.$document = e(document);
        this.disable()
    }
    var t, n = function (e) {
            for (var t = 0; t < this.opts.scrollEventKeys.length; t++)
                if (e.keyCode === this.opts.scrollEventKeys[t]) {
                    e.preventDefault();
                    return
                }
        },
        r = function (e) {
            e.preventDefault()
        };
    i.prototype = {
        disable: function () {
            var e = this;
            e.$container.on("mousewheel.UserScrollDisabler DOMMouseScroll.UserScrollDisabler touchmove.UserScrollDisabler", r);
            e.opts.handleKeys && e.$document.on("keydown.UserScrollDisabler", function (t) {
                n.call(e, t)
            })
        },
        undo: function () {
            var e = this;
            e.$container.off(".UserScrollDisabler");
            e.opts.handleKeys && e.$document.off(".UserScrollDisabler")
        }
    };
    e.fn.disablescroll = function (e) {
        !t && (typeof e == "object" || !e) ? t = new i(this, e) : t && t[e] ? t[e].call(t) : t && t.disable.call(t)
    }
})(jQuery);


;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.

        $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

        if ($(window).width() > 767) {
            stickyHeader();
        }

        if ($(window).width() < 768) {
            $(window).scroll(function () {
                var sT, getHeaderHeight;
                sT = $(window).scrollTop();
                if (sT >= 10 && !$('.home-content').length) {
                    $('header').addClass('sticky');
                } else {
                    $('header').removeClass('sticky');
                }
            })


        }
        
        

        $("#menu").click(function () {
            $("body").toggleClass("navShown")
            $("#menu-modal").slideToggle();
            setTimeout(function () {
                $("body").toggleClass("closing")
            }, 400)

        })



        if ($('section.home-content').length) {
            $('body').addClass("home-body")
        }



        var heroHeight = $(".hero-section").outerHeight() - 100;
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > heroHeight && $(window).width() < 768) {
                $('body').addClass('sticky-header');
            } else {
                $('body').removeClass('sticky-header');
            }
        })



        $('#tabs > li').eq(0).addClass("active")
        $('.tab-content-item').hide()
        $('.tab-content-item').eq(0).show()

        $('#tabs > li').each(function (i) {
            $(this).mouseenter(function () {

                if ($(this).hasClass("active")) return false

                else {
                    $("#tabs > li.active").removeClass("active")
                    $(this).addClass('active')
                    $('.tab-content-item').hide()
                    $('.tab-content-item').eq(i).show()
                }
            })
        })



        if ($(window).width() > 767) {

            $('#tabed > li').eq(0).addClass("active")
            $('.process-item-thum .process-item-wrap').hide()
            $('.process-item-thum .process-item-wrap').eq(0).show()
            $('.process-item-text').addClass('show')

            $('#tabed > li').each(function (i) {

                $(this).click(function () {
                    var ItemELement = $(this).find('> p').text();
                    setTimeout(function () {
                        $('.process-item-text p').text(ItemELement);
                    }, 200)
                    $('.process-item-text').removeClass('show')


                    setTimeout(function () {
                        $('.process-item-text-inner').addClass('showing')
                    }, 400)

                    if ($(this).hasClass("active")) return false
                    else {
                        $("#tabed > li.active").removeClass("active")
                        $(this).addClass('active')
                        $('.process-item-thum .process-item-wrap').hide();
                        $('.process-item-thum .process-item-wrap').eq(i).fadeIn(1600);
                        $('.process-item-text-inner').removeClass('showing')

                    }
                })
            })

        }


        // This function for scroll from bottom animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function


        if ($('a#back-top').length) {
            $('a#back-top').click(function (e) {
                e.preventDefault()
                var id = $(this).attr('href')

                $('html, body').stop(true, true).animate({
                    scrollTop: $('#scrolltop').offset().top
                }, 1400);

            })
        }

        $("div.portfolio-item  a.view-more").bind('click', 'touchend', function (e) {
            var $_this = $(this);
            e.preventDefault();
            e.stopPropagation();
            $("div.portfolio-item").find(".expand-content-wrap:visible").slideUp()
            $("div.portfolio-item").removeClass("active")
            if ($_this.parents("div.portfolio-item").find(".expand-content-wrap:visible").length) {
                $_this.removeClass("active")
                $_this.parents("div.portfolio-item").removeClass('active')
                $_this.parents("div.portfolio-item").find(".expand-content-wrap").slideUp()
                $_this.text("View More");
            } else {
                $_this.addClass("active")
                $_this.parents("div.portfolio-item").find(".expand-content-wrap").slideDown(function () {
                    $(this).parents("div.portfolio-item").addClass('active')
                })
                $("div.portfolio-item  a.view-more").text("View More")
                $_this.text("View Less");
            }
        })


        if ($(window).width() < 767) {
            $('#tabed > li > span').each(function () {
                $(this).bind('click', 'touchend', function () {

                    $("#tabed > li").find(">p:visible").slideUp()
                    $("#tabed > li").removeClass("active")

                    if ($(this).parent().find(">p:visible").length) {
                        $(this).parent().removeClass("active")
                        $(this).parent().find(">p").slideUp()
                    } else {
                        $(this).parent().addClass("active")
                        $(this).parent().find(">p").slideDown()
                    }
                })
            })
        }

        if ($(window).width() > 767) {
            $('#carousel-slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                //centerMode: true,
                variableWidth: true
            });

            $(".carousel-next").on('click', function () {
                $('.slick-next').trigger('click')
            })
        }


        // Begin custom peple elements show/hide

        var $nonScrollable = $("#people-description-wrap")

        if ($('#people-description-wrap').length && $(window).width() > 1024) {
            $(window).scroll(function () {

                if ($(window).width() < 768) return false

                windowScrollmeanPos = $(window).scrollTop() + 50

                if (windowScrollmeanPos >= $('#people-description-wrap').offset().top) {

                    if ($('#people-description-wrap').hasClass('section-opened')) return false

                    //$('#data-protection-wrap-parent').slideDown()
                    $('#people-description-wrap').addClass('section-opened')

                    /* $('html, body').animate({
                         scrollTop: $("#people-description-wrap").offset().top - 50
                     }, 500);*/

                    //$nonScrollable.disablescroll();

                    setTimeout(function () {
                        $('.first-shown').addClass('hiddening')
                    }, 1500)

                    setTimeout(function () {
                        $('.first-shown').removeClass('hiddening')
                    }, 2500)

                    setTimeout(function () {
                        $('.second-shown').addClass('showing')
                    }, 1600)

                    setTimeout(function () {
                        $('.second-shown').removeClass('showing')

                    }, 4000)

                    setTimeout(function () {
                        $('.first-shown').addClass('showing');
                    }, 3500)

                }

            })
        }
        // End of custom circle item show/hide


        function stickyHeader() {
            var c, currentScrollTop = 0,
                navbar = $('header');
            var a, b;
            $(window).scroll(function () {
                a = $(window).scrollTop();
                b = navbar.outerHeight();

                currentScrollTop = a;

                if (c < currentScrollTop && a > b + b) {
                    navbar.addClass("isSticky").css('top', '-' + b + 'px')
                    setTimeout(function () {
                        navbar.addClass('ishidden');
                    }, 700)

                } else if (c > currentScrollTop && !(a <= b)) {
                    navbar.css({
                        top: 0
                    });
                } else {
                    navbar.removeClass("isSticky");

                    setTimeout(function () {
                        navbar.removeClass('ishidden');
                    }, 100)


                }
                c = currentScrollTop;

                if (a < $(navbar).outerHeight()) {
                    navbar.removeClass('isLoaded');
                }

            });


            var sclTop = $(window).scrollTop();
            if (sclTop >= $(navbar).outerHeight()) {
                navbar.addClass("isLoaded")
            }


        }

       



    }) // End ready function.

    $(window).on('load', function () {
        $('body').addClass('loaded');
    })

})(jQuery)