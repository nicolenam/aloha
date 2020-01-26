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
//update p to 2 
//if tempBtn is clicked again add 1 to p

let a = 0

const cart = document.getElementsByClassName("cartBtn")
console.log(cart)

for(i=0; i < cart.length; i++){
cart[i].addEventListener("click",function(){
a ++
document.getElementById("number").innerHTML = a
})
}

});