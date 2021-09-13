//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $(".close-icon1").click(function(){
      $(".weather-menu-item1").hide();
    });
    $(".close-icon2").click(function(){
      $(".weather-menu-item2").hide();
    });
    $(".close-icon3").click(function(){
      $(".weather-menu-item3").hide();
    });
    $(".close-icon4").click(function(){
      $(".weather-menu-item4").hide();
    });
    $(".close-icon5").click(function(){
      $(".weather-menu-item5").hide();
    });     
  });