document.addEventListener("DOMContentLoaded", function() {
  let elem = document.querySelector(".carousel");

  let flkty = new Flickity(elem, {
    wrapAround: true,
    cellAlign: "left",
    contain: true
  });

  document.getElementById("subBtn").addEventListener("click", function(e) {
    const input = document.getElementById("fname").value;
    if (input.indexOf("@") !== -1) {
      alert("Thank you for subcribing!");
    } else {
      alert("This is not a valid email address.");
    }
  });

  const cart = document.getElementsByClassName("cartBtn");
  let numClick = 0;

  for (i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function() {
      numClick++;
      document.getElementById("number").innerHTML = numClick;
    });
  }

var nav = document.getElementById("nav");

window.onscroll = function(){

  if(window.pageYOffset > 100){
  nav.style.position = "fixed";

  }else {
   box.style.position = "absolute";
   box.style.top = 100;
  }
}





});
