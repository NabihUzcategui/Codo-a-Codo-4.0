$(document).ready(function(){
	$('.go_up_btn').hide();
	$('.go_up_btn').click(function(){
		$('body,html').animate({
			scrollTop:'0px'
		},300)
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.go_up_btn').slideDown(300);
		}
		else {
			$('.go_up_btn').slideUp(300);
		}
	});
});