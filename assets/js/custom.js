(function ($) {

  "use strict";

  // Header Type = Fixed
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  $('.loop').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: { 1200: { items: 5 }, 992: { items: 3 }, 760: { items: 2 } }
  });

  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('.scroll-to-section a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) + 1
      }, 500, 'swing', function () {
        // window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav a.scroll-to-section').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else {
        currLink.removeClass("active");
      }
    });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });

  // Page loading animation
  $(window).on('load', function () {
    $('#js-preloader').addClass('loaded');
  });
})(window.jQuery);