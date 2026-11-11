(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      //>> Mobile Menu Js Start <<//
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
  
    $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1920",
        meanExpand: ['<i class="far fa-plus"></i>'],
      });
      
      //>> Sidebar Toggle Js Start <<//
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
  
      //>> Body Overlay Js Start <<//
      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  

    /* ================================
     Back To Top Button Js Start
    ================================ */

  // Function to toggle back-to-top button visibility
    function toggleBackTop() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    }

    // On scroll
    $windowOn.on('scroll', function() {
        toggleBackTop();
    });

    // On document ready, force hide the button
    $(document).ready(function() {
        $("#back-top").removeClass("show");
    });

    // On click
    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    
      //>> Sticky Header Js Start <<//
  
      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
      //>> Video Popup Start <<//
      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  
      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      
      //>> Wow Animation Start <<//
      new WOW().init();
  
       //>> Nice Select Start <<//
        $('select').niceSelect();


      //>> Hero Slider Start <<//
      if($('.hero-slider').length > 0) {
        const HeroSlider = new Swiper(".hero-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             
           pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      //>> Room Slider Start <<//
      if($('.room-slider').length > 0) {
        const RoomSlider = new Swiper(".room-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
             centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
           navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3.2,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 2.2,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

      //>> Room Slider-2 Start <<//
      if($('.room-slider-2').length > 0) {
        const RoomSlider2 = new Swiper(".room-slider-2", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
             centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
               navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 2.2,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }
     
      //>> Testimonial Slider Start <<//
      if($('.testimonial-slider').length > 0) {
        const TestimonialSlider = new Swiper(".testimonial-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       //>> Testimonial Slider Start <<//
      if($('.testimonial-slider-3').length > 0) {
        const TestimonialSlider3 = new Swiper(".testimonial-slider-3", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 7,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

    //>> Offer Slider Start <<//
      if($('.offer-slider').length > 0) {
        const OfferSlider = new Swiper(".offer-slider", {
            direction: "vertical",
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 3,
                },
            },
        });
      }

      //>> Offer Slider Start <<//
         if($('.offer-slider-2').length > 0) {
        const OfferSlider2 = new Swiper(".offer-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot2",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    //>> Linked Details Sliders Start <<//
    if ($('.details-slider').length > 0 && $('.details-slider-2').length > 0) {

        // Thumbnail Slider (details-slider-2)
        const DetailsSlider2 = new Swiper('.details-slider-2', {
            spaceBetween: 30,
            speed: 1000,
            loop: true,
            slidesPerView: 4,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 2 },
                575: { slidesPerView: 2 },
                0: { slidesPerView: 2 },
            },
        });

        // Main Slider (details-slider)
        const DetailsSlider = new Swiper('.details-slider', {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: DetailsSlider2, // <-- linking thumbnail slider
            },
        });

        // Click sync (optional for stronger link)
        DetailsSlider2.on('click', function (swiper) {
            const clickedIndex = swiper.clickedIndex;
            if (typeof clickedIndex !== 'undefined') {
                DetailsSlider.slideToLoop(clickedIndex);
            }
        });
    }

    
      //>> Instagram Slider Start <<//
         const instagramBannerSlider = new Swiper(".instagram-banner-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                650: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        
            /* ================================
       Service List Js Start
    ================================ */
    $(".news-list .news-service").on("mouseenter", function (e) {
		var index = $(this).index();
		// Remove the 'active' class from all image list items
		$(".news-img-group li").removeClass("active");
		// Add the 'active' class to the corresponding image list item
		$(".news-img-group li:eq(" + index + ")").addClass("active");
	});


     /* ================================
      Brand Slider Js Start
    ================================ */

    if($('.brand-slider').length > 0) {
        const BrandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
               1399: {
                    slidesPerView: 6,
                },
               
                1199: {
                    slidesPerView: 5,
                },
                 991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                400: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
    }

     /* ================================
      Dining And Hotel Slider Js Start
    ================================ */
    

    if ($('.dining-slider').length > 0 && $('.hotel-slider').length > 0) {

        // Dining Slider
        const DiningSlider = new Swiper(".dining-slider", {
            spaceBetween: 20,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },
            breakpoints: {
                1199: { slidesPerView: 4 },
                991: { slidesPerView: 3 },
                767: { slidesPerView: 3 },
                575: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
            },
        });

        // Hotel Slider (slide effect)
        const HotelSlider = new Swiper(".hotel-slider", {
            spaceBetween: 20,
            speed: 800,
            loop: true,
            slidesPerView: 1,
            effect: "slide",
        });

        // Click dining slide → animate hotel slider
        $('.dining-slider .swiper-slide').on('click', function () {
            const realIndex = Number(this.getAttribute('data-swiper-slide-index'));
            HotelSlider.slideToLoop(realIndex, 800); // 800ms animation
        });

        // Optional: sync hotel slider with dining autoplay
        DiningSlider.on('slideChange', function () {
            HotelSlider.slideToLoop(DiningSlider.realIndex, 800);
        });
    }

    //>> Gallery Slider Start <<//
      if($('.gallery-slider').length > 0) {
        const GallerySlider = new Swiper(".gallery-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
             centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
               navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2.3,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 2.1,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

       //>> Team Slider Start <<//
      if($('.team-slider').length > 0) {
        const TeamSlider = new Swiper(".team-slider", {
            spaceBetween: 20,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             
           pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }


    // Service Main Item animation
    const serviceItems = document.querySelectorAll(".service-main-item");

    serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        // Remove active from all
        serviceItems.forEach((el) => el.classList.remove("active"));
        // Add active to current hovered item
        item.classList.add("active");
    });
    });


      /* ================================
       Custom Accordion Js Start
    ================================ */
		$(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});

    //>> Counter Js Start <<//
    $(window).on("scroll", function () {
    $(".odometer").each(function () {
      var el = $(this);
      if (el.offset().top < $(window).scrollTop() + $(window).height()) {
        if (!el.hasClass("counted")) {
          el.addClass("counted");
          el.html(el.attr("data-count"));
        }
      }
    });
    });


    
    }); // End Document Ready Function

    
     //>> Counterup Start <<//
     
      window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    // Wait 1.5 seconds before hiding
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1500);
  });

   
    //>> MouseCursor Start <<//
    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
    }
    
  
  })(jQuery); // End jQuery