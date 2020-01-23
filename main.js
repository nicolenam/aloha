document.addEventListener("DOMContentLoaded", function() {

// FEATURED STARTS HERE   
let elem = document.querySelector('.carousel');

let flkty = new Flickity( elem, {
    wrapAround: true,
    cellAlign: 'center',
    contain: true
  });
// FEATURED ENDS HERE 



// SUBSCRIPTION STARTS HERE 

document.getElementById('subBtn').addEventListener("click", function() {
  alert("Thank you for Subscribing !");
});



// SUBSCRIPTION ENDS HERE 

});
