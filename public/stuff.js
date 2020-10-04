///here we add an event listener on the page
///so if the users scrolls the navbar will have a class that adds
/// sticky behaviour(like position fixed and also changed background-color:white)
///and also texts and texts underline


/*
  SUB 1000 DE PIXELI AVEM HAMBURGER MENU

*/
let navbar;

function handleScroll(){

navbar = document.querySelector("#nav");
 const items = document.querySelectorAll(".itm");
 const hamburgerLines = document.querySelectorAll(".line");
 const hamburgerMenu = document.querySelector(".menu-icon");


 if(window.scrollY===0){
   navbar.classList.remove("navbar-sticky");
   navbar.classList.add("navbar");
   items.forEach((item,arr,index)=>{
     item.classList.add("nav-item");
     item.classList.remove("nav-item-sticky");
   });

     hamburgerLines.forEach(item=>{
       item.classList.remove("small");
       item.classList.add("large");
     });



 }
 else{
   items.forEach((item,arr,index)=>{
     item.classList.remove("nav-item");
     item.classList.add("nav-item-sticky");
   });

   hamburgerLines.forEach((item, i) => {
       item.classList.remove("large");
       item.classList.add("small");
   });


   navbar.classList.remove("navbar");
   navbar.classList.add("navbar-sticky");
 }
}

function handleResize(){
      const navbar = document.querySelector("ul");
      const hamburgerMenu = document.querySelector(".menu-icon");
      const hiddenMenu = document.querySelector(".hidden-menu");
    if(window.innerWidth<=1250){
      navbar.classList.add("no-display");
      hamburgerMenu.setAttribute("id","hamburger");
    }
    else{
       if(navbar.classList.contains("no-display")){
         navbar.classList.remove("no-display");
       }
        hamburgerMenu.removeAttribute("id");
        if(hiddenMenu.classList.contains("open")){
          hiddenMenu.classList.remove("open");
          hiddenMenu.classList.add("hidden");
        }
        if(hamburgerMenu.classList.contains("open")){
          hamburgerMenu.classList.remove("open");
        }

    }

}

window.addEventListener("scroll",handleScroll);
window.addEventListener("resize",handleResize);

window.setTimeout(function(){
  handleResize();
  const hamburgerIcon = document.querySelector(".menu-icon");
  const hamburgerLines = document.querySelector(".nav-item-side");
  const hiddenMenuItems = document.querySelector(".hidden-menu");
  const navbar = document.querySelector("nav");
  const hamburger = document.querySelector("#hamburger");

  hamburgerIcon.addEventListener("click",()=>{
    hamburgerIcon.classList.toggle("open");
    hamburgerLines.classList.toggle("show");

    if(navbar.classList.contains("navbar-sticky")){

        // if(hamburgerIcon.classList.contains("open")){
        //
        //   hambuger.classList.remove("small");
        //   hambuger.classList.add("sticky");
        // }
        // else{
        //   hambuger.classList.remove("small");
        //   hambuger.classList.add("sticky");
        // }
    }

    if(hiddenMenuItems.classList.contains("hidden")){
      hiddenMenuItems.classList.remove("hidden");
      hiddenMenuItems.classList.add("open");

    }
    else{
      hiddenMenuItems.classList.remove("open");
      hiddenMenuItems.classList.add("hidden");
    }
  });
},100);
