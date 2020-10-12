function handleScroll(){

 let navbar = document.querySelector("#nav");
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
  const nav = document.querySelector("ul");
  const hamburgerMenu = document.querySelector(".menu-icon");
  const hiddenMenu = document.querySelector(".hidden-menu");
if(window.innerWidth<=1250){
  nav.classList.add("no-display");
  hamburgerMenu.setAttribute("id","hamburger");
}
else{
   if(nav.classList.contains("no-display")){
     nav.classList.remove("no-display");
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
window.addEventListener("resize",handleResize);
window.addEventListener("scroll",handleScroll);
