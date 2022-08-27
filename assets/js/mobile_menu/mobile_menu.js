
const mobileMenuButton = document.querySelector(".mobile-menu-icon");
const mobileMenuArea = document.querySelector(".mobile-menu-area");
const mobileMenu = document.querySelector(".header__mobile-menu");


function open_close(){
	if (mobileMenuArea.style.width == "100%"){
		mobileMenuArea.style.width = "0%";
		mobileMenu.style.width = "0%";
	}
	else{
		mobileMenuArea.style.width = "100%";
		mobileMenu.style.width = "60vw";
	}
}

//Fechando o menu ao clicar na div externa apenas quando o alvo da função for exatamente a div externa, e não seus filhos:
function close(c){
	if (c.target == mobileMenuArea){
		mobileMenuArea.style.width = "0%";
		mobileMenu.style.width = "0%";
	}
}

mobileMenuButton.addEventListener("click", open_close);
mobileMenuArea.addEventListener("click", close);
