$(function(){
	$("nav ul li").click(function(){
	  var xcoord = $(this).data("xcoord");
	  var width = $(this).data("width");
	  var target = $(this).data("target");
	  $("nav div").stop().animate({marginLeft:xcoord,'width':width}, 200);
	  $(this).addClass("active");
	  $("nav ul li").not(this).removeClass("active");
	  $('.ar_wrapper').hide();
	  $('#'+target).show();
	});
	//var hammertime = new Hammer(myElement, myOptions);
	//hammertime.on('pan', function(ev) {
	//	console.log(ev);
	//});
	$(function(){
		// Bind the swipeHandler callback function to the swipe event on div.box
		$( "div.wrapper" ).on( "swipe", swipeHandler );
		// Callback function references the event target and adds the 'swipe' class to it
		function swipeHandler( event ){
			var xcoord = $(this).data("xcoord");
			var width = $(this).data("width");
			var target = event.data("target");
			console.log(target);
			$("nav div").stop().animate({marginLeft:xcoord,'width':width}, 200);
			$(this).addClass("active");
			$("nav ul li").not(this).removeClass("active");
			$('.ar_wrapper').hide();
			$('#'+target).show();
//$("nav ul li").not()
		}
	});
})