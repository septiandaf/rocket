/* NAVIGATION BAR CLICK */
$(document).ready(function(){
	$("a[href^='#']").on("click", function(e){
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$("html, body").stop().animate({
			"scrollTop": $target.offset().top
		}, 900, "swing", function(){
			window.location.hash = target;
		});
	});
});



/* BUTTON BOTTOM SCROLLTOP */
$(document).ready(function(){
	$("#btn-Top").hide();
	$(function backTop(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > 800) {
				$("#btn-Top").fadeIn();
			}else{
				$("#btn-Top").fadeOut();
			}
		});
		$("#btn-Top").click(function(){
			$("body, html").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});




/* PORTFOLIO */
$('.main-portfolio').isotope({
	itemSelector: '.portfolio-row-item',
	layoutMode: 'fitRows'
});

$('.navigasi ul li').click(function(){
	$('.navigasi ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-portfolio').isotope({
		filter: selector
	});
});


/* NAVIGATION BAR */
//$(document).ready(function() {
//	$(".navbar-js").hide();
//	$(window).scroll(function() {
//		if($(document).scrollTop() > 0) {
//			$('nav').addClass('navbar-js');
//		}else {
//			$('nav').removeClass('navbar-js');
//		}
//	});
//});


