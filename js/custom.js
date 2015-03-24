$(document).ready(function() {
	var options = {
	 	columnWidth: 100,
	 	itemSelector: '.item',
	 	isFitWidth: true
	}
	$('#pildid').imagesLoaded(function() {
	  $('#pildid').masonry(options);
	});	
	
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.yles').fadeIn();
		} else {
			$('.yles').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.yles').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
