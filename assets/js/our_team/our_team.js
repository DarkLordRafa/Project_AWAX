
const sliderArea2 = document.querySelector(".our-team .slider-area");
var sliderIndicators2;
const mobileSliderIndicators2 = document.querySelectorAll(".our-team__mobile-indicators .indicators__indicator");
const desktopSliderIndicators2 = document.querySelectorAll(".our-team__desktop-indicators .indicators__indicator");
var marginSliderArea2 = 0;
var maxMarginSliderArea2;
var slideNumberSliderArea2 = 0;
var maxSlideNumberSlideArea2;

mobileSliderIndicators2[0].style.backgroundColor = "#B28756";
desktopSliderIndicators2[0].style.backgroundColor = "#B28756";

function checkWidth(){
	if (window.innerWidth >= 1024){
	maxMarginSliderArea2 = -100;
	sliderIndicators2 = document.querySelectorAll(".our-team__desktop-indicators .indicators__indicator");
}
	else {
	maxMarginSliderArea2 = -500;
	sliderIndicators2 = document.querySelectorAll(".our-team__mobile-indicators .indicators__indicator");
	}
}

function slider2(){
	console.log(slideNumberSliderArea2);
	if (marginSliderArea2 == maxMarginSliderArea2){
		marginSliderArea2 = 0;
		slideNumberSliderArea2 = 0;
	}
	else{
		marginSliderArea2 += -100;
		slideNumberSliderArea2++;
	}
	sliderIndicators2.forEach(function(indicator){
	indicator.style.cssText = "background-color: transparent; transition: ease-in 0.5s";
	}
	);
	sliderArea2.style.marginLeft = marginSliderArea2+"vw";
	sliderIndicators2[slideNumberSliderArea2].style.backgroundColor = "#B28756";
}

checkWidth();
setInterval(checkWidth, 10);
window.addEventListener("resize", function(){
	if (window.innerWidth >= 1024){
		slideNumberSliderArea2 = 0;
	}
});
setInterval(slider2, 4000);
