$(document).ready(function () {
  var ancla1 = $(".ancla1").offset().top;
  var ancla2 = $(".ancla2").offset().top;
  var ancla3 = $(".ancla3").offset().top;

  $("#ancla1").css("opacity", "0");
  $("#ancla2").css("opacity", "0");
  $("#ancla3").css("opacity", "0");

  $("body").scroll(function () {
    if ($(this).scrollTop() >= ancla1 && $(this).scrollTop() <= ancla2) {
      $("#ancla1").css("opacity", "100");
      $("#ancla1").addClass("animate__animated animate__fadeInDown");
    }
    if ($(this).scrollTop() >= ancla2 && $(this).scrollTop() <= ancla3) {
      $("#ancla2").css("opacity", "100");
      $("#ancla2").addClass("animate__animated animate__fadeInDown");
    }
    if ($(this).scrollTop() >= ancla3) {
      $("#ancla3").css("opacity", "100");
      $("#ancla3").addClass("animate__animated animate__fadeInDown");
    }
  });

  $(".switch").click(function () {
    $("body").toggleClass("dark-mode");

    if (!$(".navbar").hasClass("navigation")) {
      $(".navbar").addClass("navigation");
      $(".logo").attr("src", "assets/img/logoblack.png");
    } else {
      $(".navbar").removeClass("navigation");
      $(".logo").attr("src", "assets/img/logo.png");
    }
  });

  $("nav a").click(function (e) {
    e.preventDefault(); //evitar el eventos del enlace normal
    var strAncla = $(this).attr("href"); //id del ancla
    $("body,html")
      .stop(true, true)
      .animate(
        {
          scrollTop: $(strAncla).offset().center,
        },
        1000
      );
  });
  
});


