// var img = document.getElementById("principal");

// background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgb(7, 7, 7)), url(assets/img/people.png);

document.body.style.backgroundImage = "url(assets/img/people.png)";
document.body.style.boxShadow = "inset 0 0 5rem rgba(0, 0, 0, 0.5);";
document.body.style.textShadow = "0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);";

var bt1, btn2, btn3;

btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");

function cambiartema() {
  var elemento = document.body.style;
  elemento.color = "#212529";
  elemento.backgroundColor = "#fff";
  elemento.background = "none";
  elemento.backgroundImage = "none";
  elemento.textShadow = "none";
  elemento.boxShadow = "none";
  btn1.style.color = "#21262a";
  btn2.style.color = "#21262a";
  btn3.style.color = "#21262a";
}

function mover() {
  img.style.marginLeft = "80px";
  img.style.transitionDuration = "1s";
}

mover();

var text1 = document.getElementsByClassName("textoencima")[0];

function mover2() {
  text1.style.marginLeft = "80px";
  text1.style.transitionDuration = "1s";
}

mover2();

var text2 = document.getElementsByClassName("centrado")[0];

function mover3() {
  text2.style.marginLeft = "-53px";
  text2.style.transitionDuration = "3s";
  text2.style.color = "#fff";
  text2.style.opacity = "100%";
}

mover3();
