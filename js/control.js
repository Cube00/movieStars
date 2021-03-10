var top = new Swiper(".top", {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".next",
        prevEl: ".prew",
    },
    effect: "slide",
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        863: {
            slidesPerView: 4,
        },
        630: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        365: {
            slidesPerView: 2,
        },
    },
});

var top = new Swiper(".mv-tv", {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".nextx",
        prevEl: ".prewx",
    },
    effect: "slide",
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        863: {
            slidesPerView: 4,
        },
        630: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        365: {
            slidesPerView: 2,
        },
    },
});

var list = new Swiper(".list", {
    speed: 400,
    initialSlide: 0,
    autoHeight: false,
    direction: "horizontal",
    loop: false,
    autoplay: 0,
    navigation: {
        nextEl: ".next-x",
        prevEl: ".prew-x",
    },
    effect: "slide",
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        630: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});