
const sliderArea1 = document.querySelector(".banner .slider-area");
const sliderIndicators1 = document.querySelectorAll(".banner .indicators__indicator");
var marginSliderArea1 = 0;
var maxMarginSliderArea1 = -200;
var slideNumberSliderArea1 = 0;
//Colorindo os indicadores na posição do contador slideNumberSliderArea1:
sliderIndicators1[slideNumberSliderArea1].style.backgroundColor = "#B28756";

function slider1(){
	if (marginSliderArea1 == maxMarginSliderArea1){
		marginSliderArea1 = 0;
		slideNumberSliderArea1 = 0;
	}
	else{
		marginSliderArea1 += -100;
		slideNumberSliderArea1++;
	}
	sliderIndicators1.forEach(function(indicator){
	indicator.style.cssText = "background-color: transparent; transition: ease-in 0.5s";
	}
	);
	sliderIndicators1[slideNumberSliderArea1].style.backgroundColor = "#B28756";
	sliderArea1.style.marginLeft = marginSliderArea1+"vw";
	//Os indicadores, que serão um node list, vão receber a cor laranja na posição do slideNumber atual
}

setInterval(slider1, 4000);
