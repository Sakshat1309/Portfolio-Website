$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky")

      }
      else{
        $('.navbar').removeClass("sticky")

      }
    })
})
// typing animation script 
var typed = new Typed(".typing",{
    strings:["Student","Web Developer","Engineer","Competitive Coder"],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true
})
var typed = new Typed(".typing-2",{
    strings:["Student","Web Developer","Engineer","Competitive Coder"],
    typeSpeed: 130,
    backSpeed: 90,
    loop: true
})