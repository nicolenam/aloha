document.addEventListener("DOMContentLoaded", function() {
  let elem = document.querySelector(".carousel");

  let flkty = new Flickity(elem, {
    wrapAround: true,
    cellAlign: "left",
    contain: true
  });

  document.getElementById("subBtn").addEventListener("click", function(e){
    const input = document.getElementById("fname").value 
    if(input.indexOf("@") !== -1) {
      alert("Thank you for subcribing!")
    } else {
      alert("This is not a valid email address.")
    }
    
  });

//if someone clicks on cartBtn
//show the number of clicks in #number innerHTML
//if tempBtn is clicked again add 1 to p



const cart = document.getElementsByClassName("cartBtn")
let numClick = 0

for(i=0; i < cart.length; i++){
cart[i].addEventListener("click",function(){
numClick ++
document.getElementById("number").innerHTML = numClick
})
}

});