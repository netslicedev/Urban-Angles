
// -----------   Initial Start   ------------ //

function init() {
	//$(".loader-C61RwL").fadeOut("slow");

	window.bheight = $( window ).height();
	window.bwidth = $( window ).width();


 	var partnerslogopos = window.bheight - 75;
	$(".partnerslogo-C61RwL").css('top',''+partnerslogopos+'px');


	$('.sidenavbutton-C61RwL').fadeOut();
	$('.services-C61RwL').hide();
	//	$('.services-C61RwL').hide();

	$(".bottomlinks-C61RwL").css('top',''+(window.bheight-90)+'px');

	//TweenMax.to(".headline-lJyLtd", 0, {filter: "blur(20px)"});
 //	alert();
	rescontent();
	restopnav();
	resbottomnav();
	rescoords();
	$(".headline-lJyLtd").css('top','400px');
	ScrollTrigger.refresh();
	alert();
	//TweenMax.to(".headline-lJyLtd", 0, {y: -500});
}

function nextServices() {
	TweenMax.to(".serviceimage-jy2nFA", 0.5, {delay:0, scale:1.2, opacity:0, filter: "blur(20px)", ease: "power1.inOut"});
	TweenMax.to(".serviceimage2-jy2nFA", 0, {delay:0, opacity:0, scale:1.3, filter: "blur(20px)", ease: "power1.inOut"});
	TweenMax.to(".serviceimage2-jy2nFA", 2, {delay:0.5, scale:1, opacity:1, filter: "blur(0px)", ease: "power1.Out"});
	$(".text2-vxeFEp").show();
	$(".text1-vxeFEp").hide();

}

function prevServices() {
	TweenMax.to(".serviceimage2-jy2nFA", 0.5, {delay:0, scale:1.2, opacity:0, filter: "blur(20px)", ease: "power1.inOut"});
	//TweenMax.to(".serviceimage-HBYbmp", 0, {delay:0, opacity:0, scale:1.3, filter: "blur(20px)", ease: "power1.inOut"});
	TweenMax.to(".serviceimage-jy2nFA", 2, {delay:0.5, scale:1, opacity:1, filter: "blur(0px)", ease: "power1.Out"});
	$(".text1-vxeFEp").show();
	$(".text2-vxeFEp").hide();
}

function rescontent() {
		var elementwidth = $(".container-C61RwL").width();
		var browserwidth = 1+((window.bwidth-elementwidth)/elementwidth);
		TweenMax.to(".container-C61RwL", 0, {delay:0, scale:browserwidth, transformOrigin:"top center"});
}

function restopnav() {
	var elementwidth = $(".toplinks-C61RwL").width();
	var browserwidth = 1+((window.bwidth-elementwidth)/elementwidth);
	TweenMax.to(".toplinks-C61RwL", 0, {delay:0, scale:browserwidth, transformOrigin:"top center"});
}

function resbottomnav() {
	var elementwidth = $(".bottomlinks-C61RwL").width();
	var browserwidth = 1+((window.bwidth-elementwidth)/elementwidth);
	TweenMax.to(".bottomlinks-C61RwL", 0, {delay:0, scale:browserwidth, transformOrigin:"bottom center"});
}

function rescoords() {
	var elementwidth = $(".coords-C61RwL").width();
	var browserwidth = 1+((window.bwidth-elementwidth)/elementwidth);
	TweenMax.to(".coords-C61RwL", 0, {delay:0, scale:browserwidth, transformOrigin:"middle center"});
}



gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    scrollTrigger: {
			trigger: ".headline-lJyLtd",
			start: "top 85%",
			end: "middle 45%",
			scrub: 0,
		//	markers: true
		}
});
tl.to(".img-fYWbae", {
			filter: "blur(20px)"
});
tl.from(".headline-lJyLtd", {
		y: 100,
		filter: "blur(20px)"
},0);

/*
gsap.to(".logos-O927uM", {
    scrollTrigger: {
			trigger: ".logos-O927uM",
			start: "top 80%",
			end: "bottom -100px",
			scrub: 0,
			//markers: true,
			toggleActions: "restart pause reverse pause"
		},
			  x: -1000,
				duration: 3
});
*/



/*
var $oscar = $('.mousefollow-C61RwL');


function moveOscar(e) {
    gsap.to('.mousefollow-C61RwL', {
      duration: 0,
      delay:0,
      x: e.clientX - 64,
      y: e.clientY - 64,
      ease: "power2.inOut"
    });
}


$(window).on('mousemove', moveOscar);
$(window).resize(moveOscar);
*/





$(document).on('mousemove', function(e) {
	$('.xcoord-tuzc6y').html("0."+(e.clientX*21231));
	$('.ycoord-tuzc6y').html("0."+(e.clientY*21211));
	// Blur on mouse pos
	//var filterVal = 'blur('+(e.clientY/250)+'px)';
	//$('.img-fYWbae').css('filter',filterVal).css('webkitFilter',filterVal).css('mozFilter',filterVal).css('oFilter',filterVal).css('msFilter',filterVal);
});

function showservicemenu() {
	$('.services-C61RwL').show();
	TweenMax.from(".services-C61RwL", 0.2, {top:window.bheight, scale:1, opacity:1, ease: "power1.inOut"});
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

function rollover() {
	$('.btnservicenext-vxeFEp').css('color', '#FFC90C');
}


$('.btnservicenext-vxeFEp').click(function() { nextServices(); }).mouseover(function() { rollover(); }).css({'cursor': 'pointer'});
$('.btnserviceprev-vxeFEp').click(function() { prevServices(); }).css({'cursor': 'pointer'});
$('.services-CQ7PbM').click(function() { 	showservicemenu(); }).css({'cursor': 'pointer'});
$('.servicesclose-7tEf0Q').click(function() { 	$('.services-C61RwL').toggle(); }).css({'cursor': 'pointer'});

$('.projectbutton-No0ao4').click(function() { 	 }).css({'cursor': 'pointer'});


window.onload = init;
