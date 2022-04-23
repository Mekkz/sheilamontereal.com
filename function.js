

function myFunction1() {
  window.location.replace("Sheilamontereal.html");
}



function myFunction2() {
  window.location.replace("about.html");
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}
