
//
//$('ul.navbar-nav li.dropdown').hover(function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(100);
//}, function () {
//    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(100);
//});


$("#cartAction").on("click", function () {
    $(".cart_sec_wrapper").toggleClass("cart_drawer_open");
});

$("#cartActionClose").on("click", function () {
    $(".cart_sec_wrapper").removeClass("cart_drawer_open");
});

$(document).on("click", function (event) {
    const filterWrapper = $(".cart_sec_wrapper");
    const isClickInside =
        filterWrapper.is(event.target) ||
        filterWrapper.has(event.target).length > 0;
    const isToggleButton = $(event.target).is("#cartAction");

    if (!isClickInside && !isToggleButton) {
        filterWrapper.removeClass("cart_drawer_open");
    }
});


$("#mobileMenu").on("click", function () {
    $(".mobile_menu_wrapper").toggleClass("open_for_mobile");
});

$("#mobileMenuClose").on("click", function () {
    $(".mobile_menu_wrapper").removeClass("open_for_mobile");
});

$(document).on("click", function (event) {
    const filterWrapper = $(".mobile_menu_wrapper");
    const isClickInside =
        filterWrapper.is(event.target) ||
        filterWrapper.has(event.target).length > 0;
    const isToggleButton = $(event.target).is("#mobileMenu");

    if (!isClickInside && !isToggleButton) {
        filterWrapper.removeClass("open_for_mobile");
    }
});



const category_slider = new Swiper(".category_slider", {
    speed: 1000,
    slidesPerView: 6.5,
    parallax: true,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 20000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".new_arival_slide_top_pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".category_slider_next",
        prevEl: ".category_slider_prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        759: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 6.5,
            spaceBetween: 20,
        },
    },
});

const testimonial_slider = new Swiper(".testimonial_slider", {
    speed: 1000,
    slidesPerView: 5,
    parallax: true,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 20000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".testimonial_slider_pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial_slider_next",
        prevEl: ".testimonial_slider_prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        759: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

const product_slider = new Swiper(".product_slider", {
    speed: 1000,
    slidesPerView: 6,
    parallax: true,
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,
    autoplay: {
        delay: 20000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".testimonial_slider_pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial_slider_next",
        prevEl: ".testimonial_slider_prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        759: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});





let counter = 0;

function increment() {
    counter++;
    document.getElementById('counter').innerText = counter;
}

function decrement() {
    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
}
