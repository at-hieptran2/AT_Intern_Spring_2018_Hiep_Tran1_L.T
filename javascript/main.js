/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * scrollBtn
  * onepage_nav 
  * ajaxAppointmentl
  * ajaxContactForm
  * alertBox
  * detectViewport
  * counter
  * tabs
  * flatPricingCarousel
  * flatTestimonials
  * simpleSlider
  * datepicker
  * sectionVideo
  * googleMap  
  * responsiveVideo
  * flatAnimation
  * goTop
  * retinaLogos
  * parallax
  * removePreloader
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var headerFixed = function() {
        if ( $('body').hasClass('header-sticky') ) {
            var nav = $('.header');

            if ( nav.size() != 0 ) {
                var offsetTop = $('.header').offset().top,
                    headerHeight = $('.header').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);   
                    injectSpace.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop + 190 ) {
                        $('.header').addClass('downscrolled');
                        injectSpace.show();
                    } else {
                        $('.header').removeClass('header-small downscrolled');
                        injectSpace.hide();
                    }

                    if ( $(window).scrollTop() > 500 ) {
                        $('.header').addClass('header-small upscrolled');
                    } else {
                        $('.header').removeClass('upscrolled');
                    }
                })
            }
        }     
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-sub-menu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-sub-menu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {        	
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-sub-menu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var portfolioIsotope = function() {
        if ( $().isotope ) {                    
            var $container = $('.portfolio-wrap');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.item',
                    transitionDuration: '1s'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });            
        };
    };

    var flatreviews = function() {
        $('.team-row').each(function() { 
            if ( $().owlCarousel ) {
                $(this).find('.owl-carousel-services').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    margin: 0,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: 3
                        }
                    }
                });
            }
        });
    };  

    var member = function() {
        $('.team-row').each(function() { 
            if ( $().owlCarousel ) {
                $(this).find('.owl-carousel-services.v1').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    margin: 0,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    }; 

    var doitac = function() {
        $('.owl-doitac').each(function() { 
            if ( $().owlCarousel ) {
                $(this).find('.post').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    margin: 15,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        600:{
                            items: 2
                        },

                        767:{
                            items: 2
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: 6
                        }
                    }
                });
            }
        });
    }; 

    var tinmoi = function() {
        $('.grid-post.v1').each(function() { 
            console.log('ma');
            if ( $().owlCarousel ) {
                $(this).find('.post').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    margin: 15,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        600:{
                            items: 2
                        },

                        767:{
                            items: 2
                        },
                        991:{
                            items: 4
                        },
                        1200: {
                            items: 4
                        }
                    }
                });
            }
        });
    }; 


    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.send-wrap').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg == 'Success' ) {                                
                                result = 'Email Sent Successfully. Thank you, Your application is accepted - we will contact you shortly';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    }; 

    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })     
    }    
   
    var blogMasory = function() {         
        if ( $().isotope ) {           
            var $container = $('.post-wrap');
            $container.imagesLoaded(function(){
                $container.masonry({
                    itemSelector: '.entry',
                    transitionDuration: '0.5s',                    
                    layoutMode: 'masonry',                 
                    masonry: { columnWidth: $container.width() / 12 }
                }); // isotope
             });

            $(window).resize(function() {
                $container.masonry({
                   masonry: { columnWidth: $container.width() / 12 }
                });
            }); // relayout        
            
        };
    };

    var simpleSliderofBlog = function() { 
        if ( $().flexslider ) {
            $('.flat-blog-slider').each(function() {   
                var $this = $(this);         
                $this.find('.flexslider').flexslider({
                    animation      :  "fade",
                    direction      :  "horizontal", // vertical
                    pauseOnHover   :  true,
                    useCSS         :  false,
                    easing         :  "swing",
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  false,
                    directionNav   :  true,
                    slideshow      :  true,
                    prevText       :  '<i class="fa fa-angle-left"></i>',
                    nextText       :  '<i class="fa fa-angle-right"></i>',
                    smoothHeight   :  true
                }); // flexslider
           }); // flat-blog-slider
        }
    };

    var popularflexslider = function(){

        if ( $().flexslider ) {
            $('.widget.widget-popular').flexslider({
                animation: "slide",
                direction: "vertical",

                controlNav: true,
                directionNav: true,
                slideshow: true,
                mousewheel: false,
                prevText: "",
                nextText: ""
            });
        };
    };
 

    var goTop = function() {
        $(window).scroll(function() {
            var bienbottom =  $('body').height() - $('#bottom-nav').height()-983; 
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
                if ($(this).scrollTop() > bienbottom )  {

                 $('.go-top').removeClass('show');
                } 
            }             
            else {
                $('.go-top').removeClass('show');
            }
        }); 

        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });

        $('.go-top-v1').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    }; 

    var swClick = function () {
        function activeLayout () {
            $(".switcher-container" )
            .on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');                               
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "z-index": "10"});
            })
            .on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');   
                $('body').css({'background': '#fff' });             
                return false;
            })       
        }

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout(); 
        activePattern();
    }
    
    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.2);
            $('.parallax2').parallax("50%", 0.4);  
            $('.parallax3').parallax("50%", 0.5);            
        }
    };     


    var removePreloader = function() {        
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

    var backgroundBlog = function() {
        var backgroundheight = 5000;
        $('<style>.bg-sidebar .wrap-main-post:before{height:'+backgroundheight+'px}</style>').appendTo('head');      
    }

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed(); 
        }      
          


        simpleSliderofBlog();  
        responsiveMenu();        
        blogMasory();
        portfolioIsotope();
        backgroundBlog();
        ajaxContactForm();
        alertBox();
        parallax();
        doitac();
        tinmoi();
        goTop(); 
        member(); 
        popularflexslider();
        flatreviews();
        swClick();      
        removePreloader();
   	});

})(jQuery);