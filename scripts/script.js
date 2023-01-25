$('.slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    nextArrow: '<img src="images/slider/left.png" alt="">',
    prevArrow: '<img src="images/slider/right.png" alt="">',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
});

// Скролл к заказу
$('.to-form').click((e) => {
    $('.section-form')[0].scrollIntoView({behavior: "smooth"});
});

// Валидация формы
$('#create-order').click(function () {
    let userName = $('#name');
    let userPhone = $('#phone');

    if (userName.val() && userPhone.val()) {
        alert("Спасибо за заказ!");
        $('.help-input').hide();
        document.getElementById('form').reset();
    }
})
$('.help-input').hide();
$('.input').click(function () {
    $('.help-input').show();
})

$(function () {
    $(document).on("change keyup input click", "#phone", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, "");
        }
        ;
    });
});

// Таймер
window.addEventListener('load', event => {
    let numberOfMin = 30;
    let currentDate = new Date();
    let deadlineTime = currentDate.setMinutes(currentDate.getMinutes() + 30);
    let countdown = setInterval(function () {
        let currentTime = new Date().getTime();
        let restOfTime = deadlineTime - currentTime;
        let min = Math.floor((restOfTime % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((restOfTime % (1000 * 60)) / 1000);
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        document.getElementById("deadline-timer").innerHTML = min + ":" + sec;
        if (numberOfMin === 0) {
            document.getElementById("min-or-sec").innerHTML = "секунд";
        }
        if (restOfTime < 0) {
            clearInterval(countdown);
            document.getElementById("time-remainer").innerHTML = "<h2>Время истекло!</h2>";
        }
    }, 1000);
})
;
