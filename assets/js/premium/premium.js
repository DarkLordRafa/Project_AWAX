
const sliderArea4 = document.querySelector(".premium .slider-area");
const sliderIndicators4 = document.querySelectorAll(".premium .indicators__indicator");
var marginSliderArea4 = 0;
var maxMarginSliderArea4 = -200;
var slideNumberSliderArea4 = 0;

sliderIndicators4[slideNumberSliderArea4].style.backgroundColor = "#B28756";

function slider4(){
	if (marginSliderArea4 == maxMarginSliderArea4){
		marginSliderArea4 = 0;
		slideNumberSliderArea4 = 0;
	}
	else{
		marginSliderArea4 += -100;
		slideNumberSliderArea4++;
	}
	sliderIndicators4.forEach(function(indicator){
	indicator.style.cssText = "background-color: transparent; transition: ease-in 0.5s";
	}
	);
	sliderIndicators4[slideNumberSliderArea4].style.backgroundColor = "#B28756";
	sliderArea4.style.marginLeft = marginSliderArea4+"vw";
}

setInterval(slider4, 4000);
