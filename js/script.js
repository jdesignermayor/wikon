var img = document.getElementById("principal");


function mover (){
	img.style.marginLeft = "80px";
	img.style.transitionDuration = "1s";
}

mover();


var text1 = document.getElementsByClassName("textoencima")[0];

function mover2 (){
	text1.style.marginLeft = "80px";
	text1.style.transitionDuration = "1s";
}

mover2();

var text2 = document.getElementsByClassName("centrado")[0];

function mover3 (){

	text2.style.marginLeft = "-53px";
	text2.style.transitionDuration = "3s";
	text2.style.color = "#fff";
	text2.style.opacity = "100%"

}

mover3();

