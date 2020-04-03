
var img = document.getElementById("principal");


function mover (){
	img.style.marginLeft = "80px";
	img.style.transitionDuration = "1s";
}

mover();


var txt2 = document.getElementsByTagName("p")[0];

var txt3 = document.getElementsByTagName("p")[1];



function mover3(){
	txt2.style.transitionDuration = "1s";
	txt2.style.background = "#00b8bb";
	txt2.style.color = "#fff";
	txt3.style.transitionDuration = "1s";
	txt3.style.background = "#00b8bb";
	txt3.style.color = "#fff";

}

mover3();

var menu = document.getElementsByTagName("a")[0];

function dmenu(){
	
	menu.style.color = "black";
	menu.style.transitionDuration = "1s";

}

dmenu();