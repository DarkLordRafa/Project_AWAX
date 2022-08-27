
const sliderArea3 = document.querySelector(".happy-clients .slider-area");
const sliderIndicators3 = document.querySelectorAll(".happy-clients .indicators__indicator");
var marginSliderArea3 = 0;
var maxMarginSliderArea3 = -300;
var slideNumberSliderArea3 = 0;

sliderIndicators3[slideNumberSliderArea3].style.backgroundColor = "#B28756";

function slider3(){
	if (marginSliderArea3 == maxMarginSliderArea3){
		marginSliderArea3 = 0;
		slideNumberSliderArea3 = 0;
	}
	else{
		marginSliderArea3 += -100;
		slideNumberSliderArea3++;
	}
	sliderIndicators3.forEach(function(indicator){
	indicator.style.cssText = "background-color: transparent; transition: ease-in 0.5s";
	}
	);
	sliderIndicators3[slideNumberSliderArea3].style.backgroundColor = "#B28756";
	sliderArea3.style.marginLeft = marginSliderArea3+"vw";
}

setInterval(slider3, 4000);
