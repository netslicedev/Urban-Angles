
// -----------   Initial Start   ------------ //

function init() {
	$(".loader-C61RwL").fadeOut("slow");

	window.bheight = $( window ).height();
	window.bwidth = $( window ).width();


 	var partnerslogopos = window.bheight - 75;
	$(".partnerslogo-C61RwL").css('top',''+partnerslogopos+'px');


	$('.sidenavbutton-C61RwL').fadeOut();
	$('.quote-C61RwL').hide();


	rescontent();


}


function rescontent() {
		var elementwidth = $(".container-C61RwL").width();
		var browserwidth = 1+((window.bwidth-elementwidth)/elementwidth);
		TweenMax.to(".container-C61RwL", 0, {delay:0, scale:browserwidth, transformOrigin:"top center"});
}


var $circle = $('.circle-C61RwL'),
	$circle2 = $('.circle2-C61RwL'),
    $wrapper = $('body');

  function moveCircle(e) {
    TweenMax.to($circle, 0.2, {
      css: {
        left: e.pageX - $(".circle-C61RwL").width()/2,  // e.pageY - $(".box").height()/2
        top: e.pageY - $(".circle-C61RwL").height()/2
      }
    });
  }

function moveCircle2(e) {
    TweenMax.to($circle2, 0.5, {
      css: {
        left: e.pageX - $(".circle2-C61RwL").width()/2,  // e.pageY - $(".box").height()/2
        top: e.pageY - $(".circle2-C61RwL").height()/2
      }
    });
  }

var flag = false;
$($wrapper).on('mousemove', moveCircle);
$($wrapper).on('mousemove', moveCircle2);





function showQuote() {
	$('.quote-C61RwL').show();
	TweenMax.from(".quote-C61RwL", 0.3, {x:window.bwidth, ease:Power4.easeOut});
}
function hideQuote() {
	$('.quote-C61RwL').show();
	TweenMax.to(".quote-C61RwL", 0, {x:window.bwidth, ease:Power4.easeOut});
}

$(window).scroll(function(){
    scroll = $(window).scrollTop();
  if (scroll >= window.bheight/2) {
		$('.sidenav-C61RwL').fadeOut()
		$('.sidenavbutton-C61RwL').fadeIn();
		$('.logotext-exFKkL').fadeOut();
}  else {
		$('.sidenav-C61RwL').fadeIn();
		$('.sidenavbutton-C61RwL').fadeOut();
		$('.logotext-exFKkL').fadeIn();
	}
});


$('.quotebutton-C61RwL').click(function() { showQuote(); }).css({'cursor': 'pointer'});
$('.quote-C61RwL').click(function() { hideQuote(); }).css({'cursor': 'pointer'});

window.onload = init;
