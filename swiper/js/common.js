$(function () {
  swiperSlide();
});

function swiperSlide() {
  $(".js_contentSlideWrap").each(function(index, element) {
    var $this = $(this);
    $this.addClass("instance-" + index);

    function slideAction(currentSwiper) {
      let slideNum;
      
      function viewSlideNum() {
        slideNum = $(window).width() > 768 ? 4 : 2;
      }

      viewSlideNum();

      $(window).resize(function () {
        viewSlideNum();
      });

      const first = currentSwiper.activeIndex + 1;
      const last = currentSwiper.activeIndex + slideNum;

      $(".instance-" + index).each(function () {
        $(this).find(".swiper-slide").removeClass("is_active");
        // first번째부터 last번째까지
        $(this).find(`.swiper-slide:nth-child(n+${first}):nth-child(-n+${last})`).addClass("is_active");
      });
    }

    let options = {};
    let defaultOption = {}
    let wideOption = {}
    let optionsValue = {}

    /* 2차 시도 */
    if ($(this).find(".bl_contentSlide--wide").length) {
      options = {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 12,
        breakpoints: {
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 24,
          },
        },
        navigation: {
          nextEl: ".instance-" + index + " .el_gray__arrowNext",
          prevEl: ".instance-" + index + " .el_gray__arrowPrev"
        },
        on: {
          init: function (swiper) {
            slideAction(swiper);
          },
          resize: function (swiper) {
            slideAction(swiper);
          },
          slideChange: function (swiper) {
            slideAction(swiper);
          },
        }
      }
    } else {
      options = {
        init: true,
        loop: false,
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 12,
        speed: 500,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        breakpoints: {
          768: {
            spaceBetween: 24,
          },
        },
        navigation: {
          nextEl: ".instance-" + index + " .el_gray__arrowNext",
          prevEl: ".instance-" + index + " .el_gray__arrowPrev"
        },
      }
    }

    var swiper = new Swiper(".instance-" + index + " .js_contentSlide", options);
    console.log(options);

    /* 1차 시도 */
    // options = {
    //   init: true,
    //   loop: false,    
    //   centeredSlides: false,
    //   spaceBetween: 12,
    //   speed: 500,
    //   observer: true,
    //   observeParents: true,
    //   watchOverflow: true,
    //   breakpoints: {
    //     768: {
    //       spaceBetween: 24,
    //     },
    //   },
    //   navigation: {
    //     nextEl: ".instance-" + index + " .el_gray__arrowNext",
    //     prevEl: ".instance-" + index + " .el_gray__arrowPrev"
    //   },
    // };
    // defaultOption = {
    //   slidesPerView: "auto",
    // };
    // wideOption = {
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 4,
    //       slidesPerGroup: 4,
    //       spaceBetween: 24,
    //     },
    //   },
    //   on: {
    //     init: function (swiper) {
    //       slideAction(swiper);
    //     },
    //     resize: function (swiper) {
    //       slideAction(swiper);
    //     },
    //     slideChange: function (swiper) {
    //       slideAction(swiper);
    //     },
    //   }
    // };
    // if ($(this).find(".bl_contentSlide--wide").length) {
    //   optionsValue = options.push(wideOption);
    // } else {
    //   optionsValue = options.push(defaultOption);
    // }

    // var swiper = new Swiper(".instance-" + index + " .js_contentSlide", optionsValue);
    // console.log(optionsValue);
  
    /*  기본 */
    // var swiper = new Swiper(".instance-" + index + " .js_contentSlide", {
    //   init: true,
    //   loop: false,
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    //   centeredSlides: false,
    //   spaceBetween: 12,
    //   speed: 500,
    //   observer: true,
    //   observeParents: true,
    //   watchOverflow: true,
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 4,
    //       slidesPerGroup: 4,
    //       spaceBetween: 24,
    //     },
    //   },
    //   navigation: {
    //     nextEl: ".instance-" + index + " .el_gray__arrowNext",
    //     prevEl: ".instance-" + index + " .el_gray__arrowPrev"
    //   },
    //   on: {
    //     init: function (swiper) {
    //       slideAction(swiper);
    //     },
    //     resize: function (swiper) {
    //       slideAction(swiper);
    //     },
    //     slideChange: function (swiper) {
    //       slideAction(swiper);
    //     },
    //   }
    // });
  });
}