// var img = document.getElementById("principal");

// background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgb(7, 7, 7)), url(assets/img/people.png);
var pantalla = document.getElementById("imgprincipal");
var miniaturas = document.getElementsByClassName("miniatura");

function cambiar() {
  var atributo = this.getAttribute("src");
  var titulo = this.getAttribute("name");
  pantalla.setAttribute("src", atributo);
  pantalla.style.transitionDuration = "all 1s";
}

/*
miniaturas[0].addEventListener("click", cambiar);
miniaturas[1].addEventListener("click", cambiar);
miniaturas[2].addEventListener("click", cambiar);
miniaturas[3].addEventListener("click", cambiar);

document.body.style.backgroundImage = "url(assets/img/people.png)";

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
  btn1.style.color = "#21262a";
  btn2.style.color = "#21262a";
  btn3.style.color = "#21262a";
  document.getElementById("btnDescargar").classList.remove("btn-secondary");
  document.getElementById("btnDescargar").classList.add("btn-dark");
  elemento.transitionDuration = "1s";
}

// null para que no deje de funcionar
function flecha(param = null) {
  if (param == 1) {
    document.getElementById("panel2").focus();
    document.getElementById("panel2").scrollHeight;
  }
  if(param == 2){
	document.getElementById("panel3").focus();
    document.getElementById("panel3").scrollHeight;
  }
}

document.getElementById("btn2").addEventListener("click", function () {
  flecha(1);
});

document.getElementById("btn3").addEventListener("click", function () {
  flecha(2);
});
*/

var textWrapper = document.querySelector('.labelPrincipal');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var tl = anime.timeline({loop: true})
  .add({
    targets: '.labelPrincipal .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2150,
    delay: (el, i) => 20 * (i+1),
    loop: false
  });

setTimeout(function(){
  tl.pause();
}, 2500);

$(document).ready(function() {
var lastScrollTop = 0;
$(window).on('scroll', function() {
  alert('hola')
  
    var header = $('.header');
    var stage0 = $('.stage-0');
    var scrollTop = $(window).scrollTop();
    if (scrollTop > lastScrollTop) {
        // down scroll
       /* if (scrollTop > stage0.offset().top + stage0.height()) {
            header.addClass('hide').removeClass('color');
        }*/
      alert('haciendo abajo scroll...')
    } else {
      alert('haciendo arriba scroll...')
        // up scroll
        /* if (scrollTop <= stage0.offset().top + stage0.height()) {
            header.removeClass('color headerBGchange headerLIchange');
        } else {
            header.removeClass('hide').addClass('color headerBGchange headerLIchange');
        } */
    }
    lastScrollTop = scrollTop;
});
});

