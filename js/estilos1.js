console.log

var img = document.getElementById("principal");


function mover (){
	img.style.marginLeft = "80px";
	img.style.transitionDuration = "1s";
}

mover();


var tit = document.getElementsByClassName("textos")[0];

var tit2 = document.getElementsByClassName("textos2")[0];

function mover2 (){
	tit.style.transitionDuration = "1s";
	tit.style.color = "#00b8bb";
	tit2.style.marginLeft = "150px";
	tit2.style.transitionDuration = "1s";
}


mover2();