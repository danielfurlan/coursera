window.onscroll = function(){Scroll()};

// var navHeader = document.getElementById("header-nav");
var headphoto = document.getElementById("head");

// var sticky = navHeader.offsetTop;
var stickyPhoto = headphoto.offsetTop;
console.log("headphoto offset = " +stickyPhoto);
console.log("window Y = " + window.offsetTop);


function Scroll(){
	// if (window.pageYOffset > sticky) {
	// 	navHeader.classList.add("sticky");
	// 	console.log("Page Y > sticky");
	// }
	// else {
	// 	navHeader.classList.remove("sticky");
	// }
	if (window.pageYOffset >= 0) {
		headphoto.classList.add("stickyPhoto");
		console.log("Page Y > stickyPhoto");
	}
	else {
		headphoto.classList.remove("stickyPhoto");
	}	
	console.log("headphoto offset = " +stickyPhoto);
console.log("window Y = " + window.offsetTop);
}

function light(x){
	x.querySelector(".light").
	style.textShadow = "2px 2px white";
	console.log('Im being hovered');
}

function shadow(x){
	x.querySelector(".light").
	style.textShadow = "none";
	console.log('Im being hovered');
}

function click(){
	console.log('I was clicked');
	document.querySelector("#navbarSupportedContent").style.width = "400px";
	console.log('I was clicked');
	console.log("... and now I have a differente widht");
}