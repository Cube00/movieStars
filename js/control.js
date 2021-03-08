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
    slidesPerView: 4,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        630: {
            slidesPerView: 3,
            spaceBetween: 20,
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
        nextEl: ".next-x",
        prevEl: ".prew-x",
    },
    effect: "slide",
    spaceBetween: 20,
    slidesPerView: 4,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    grabCursor: true,
    breakpoints: {
        630: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        365: {
            slidesPerView: 2,
        },
    },
});