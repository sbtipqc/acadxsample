// SIDEBAR JS [REQUIRED FOR ALL]

$(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
})

// NAVBAR JS [REQUIRED FOR ALL]

$(".menu > ul > li").click(function(e) {
    $(this).siblings().removeClass("active");
    $(this).closest("ul").siblings().find("li").removeClass("active");
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle(200, "swing");
        $(this).siblings().find("ul").slideUp(200, "swing");
        $(this).closest('ul').siblings().find('ul').slideUp(200, "swing");
        $(this).siblings().find(".menu").find("ul").find("li").removeClass("active");
});

const sr = ScrollReveal()

ScrollReveal({
    reset: true,
    duration: 1500,
    delay: 250
})

// format: (scale, rotate, distance, delay, origin)

sr.reveal('.start-section .content h1', { distance: '50px', origin: 'right'});
sr.reveal('.start-section .content p', { distance: '50px', origin: 'left'});
sr.reveal('.start-section .content a', { scale: '1.2', delay: 1000, origin: 'bottom'});
sr.reveal('.start-section .box', { delay: 500, distance: '50px'});

sr.reveal('.about-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.about-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.about-section .image', { delay: 500, distance: '50px', origin: 'bottom'});
sr.reveal('.about-section .content', { delay: 500, distance: '50px', origin: 'top'});

sr.reveal('.course-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.course-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.course-section .course-slider', { delay: 500, distance: '50px', origin: 'bottom'});

sr.reveal('.testimonial-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.testimonial-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.testimonial-section .testimonial-slider', { delay: 500, distance: '50px', origin: 'bottom'});
sr.reveal('.testimonial-section .stats-counter', { delay: 500, scale: '1.2', origin: 'top'});

sr.reveal('footer')

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".testimonial-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });