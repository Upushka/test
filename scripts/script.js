$('.slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    // nextArrow: '<img src="img/angle-left.svg" alt="">',
    // prevArrow: '<img src="img/angle-left.svg" alt="">',
});

$('.btn-to-cart').click((e) => {
    $('.order')[0].scrollIntoView( {behavior: "smooth"});
})