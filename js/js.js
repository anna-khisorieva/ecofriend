$(document).ready(function () {

	$(".main-menu__btn").click(function() {
  		$(this).toggleClass("active");
  		$(".hidden-mnu").slideToggle();
  		return false;
	});

	$(".hidden-mnu ul li a").click(function() {
	if (window.matchMedia("(max-width: 1200px)").matches) {
		$(".hidden-mnu").fadeOut(600);
		$(".main-menu__btn").toggleClass("active");
	}
	});

	$(".arrow").click(function(){
		$("html, body").animate({
			scrollTop : $("#eco").offset().top - 77
		}, 1000);
	});

	$(".arrow-eco").click(function(){
		$("html, body").animate({
			scrollTop : $("#fruit").offset().top - 77
		}, 1000);
	});

	$(".arrow-fruit").click(function(){
		$("html, body").animate({
			scrollTop : $("#oils").offset().top - 77
		}, 1000);
	});

	$(".arrow-oils").click(function(){
		$("html, body").animate({
			scrollTop : $("#milk").offset().top - 77
		}, 1000);
	});
	$(".arrow-milk").click(function(){
		$("html, body").animate({
			scrollTop : $("#farm").offset().top
		}, 1000);
	});

	 $(".site-nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута hre
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 77;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

	$(".btn-top, .top").click(function(){
		$("html, body").animate({scrollTop: 0}, 900);
	});

    new WOW().init();


});
