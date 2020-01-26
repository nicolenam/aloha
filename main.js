document.addEventListener("DOMContentLoaded", function() {
  let elem = document.querySelector(".carousel");

  let flkty = new Flickity(elem, {
    wrapAround: true,
    cellAlign: "left",
    contain: true
  });

  document.getElementById("subBtn").addEventListener("click", function() {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // if(InputEventmatch(mailFormat))
    alert("Thank you for Subscribing !");
  });

  const btn = document.getElementById("cartBtn")
  btn.addEventListener("click", function(){
alert("buy more")

  })
  // function ValidateEmail(InputText){

  //   let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if(InputText.value.match(mailFormat))
  //   alert("Thank you for subscribing !");
  //    return true;
  // }else{
  //   alert("You have entered an invalid email address!");
  //   return false;
  // }

  
//   const carBtn = document.querySelectorAll(".carBtn");
//   cartBtn.forEach(function(btn){
//     btn.addEventListener('click',function(e){
// console.log(cartBtn)
//     })
//   })


});
