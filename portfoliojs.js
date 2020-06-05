// to have a complete underline when a partivcular event is active in the header
var navbar = document.querySelector(".navbar")
  a = navbar.querySelectorAll('a');
  a.forEach(function(element){
    element.addEventListener("click",function(){
      for(var i=0; i<a.length; i++){
        a[i].classList.remove("active");
    }
    this.classList.add("active");
    document.querySelector('.navbar').classList.toggle('show');//by this as soon as we click anything in tghe hamburger after opening that it will close the ham burger
    })
  })
var hamburger = document.querySelector('.ham-burger');
hamburger.addEventListener("click",function(){
  document.querySelector('.navbar').classList.toggle('show');
});
