import React ,{useEffect} from "react";
import "../CSS/Navbar.css";
import {Link} from "react-router-dom";

class Navbar extends React.Component{

  constructor(props){
    super(props);

  }
componentDidMount(){
window.scrollTo(0, 0);

const hamburgerIcon = document.querySelector(".menu-icon");
const hamburgerLines = document.querySelector(".nav-item-side");
const hiddenMenuItems = document.querySelector(".hidden-menu");
const navbar = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger");

 hamburgerIcon.addEventListener("click",()=>{
  hamburgerIcon.classList.toggle("open");
  hamburgerLines.classList.toggle("show");


  if(hiddenMenuItems.classList.contains("hidden")){
    hiddenMenuItems.classList.remove("hidden");
    hiddenMenuItems.classList.add("open");

  }
  else{
    hiddenMenuItems.classList.remove("open");
    hiddenMenuItems.classList.add("hidden");
      }
    });

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

  render(){
        return(
          <nav className="navbar" id="nav">
          <div className="items-container">
          <p className="main-logo">Daniel's Watches</p>
            <ul className="nav-items-container">
            <Link to="/" style={{textDecoration:"none"},{color:"inherit"}}> <li className="nav-item itm">Home</li></Link>
            <Link to="/products" style={{textDecoration:"none"},{color:"inherit"}}><li className="nav-item itm">Products</li></Link>
            <Link to="/about" style={{textDecoration:"none"},{color:"inherit"}}><li className="nav-item itm">About us</li></Link>
            <Link to="/contact" style={{textDecoration:"none"},{color:"inherit"}}><li className="nav-item itm">Contact </li></Link>
            <li className="nav-item cart"><Link to="/cart" className="cart-logo-link"><i className="fas fa-shopping-cart" aria-hidden="true"></i></Link><span className="items-count">{this.props.itemsInCart}</span></li>
            </ul>
          </div>
              <div className="menu-icon">
                <span className="line large"></span>
                <span className="line large"></span>
                <span className="line large"></span>
              </div>
              <div className="hidden-menu hidden">
              <ul>
                <Link to="/" style={{textDecoration:"none",color:"inherit"}}><li className="nav-item-side">Home</li></Link>
                <Link to="/products" style={{textDecoration:"none",color:"inherit"}}><li className="nav-item-side">Products</li></Link>
                <Link to="/about" style={{textDecoration:"none",color:"inherit"},{padding:"0"}}><li className="nav-item-side">About us</li></Link>
                <Link to="/contact" style={{textDecoration:"none",color:"inherit"}}><li className="nav-item-side">Contact </li></Link>
                <li className="nav-item-side"><Link to="/cart" className="cart-logo-small-menu"><i className="fas fa-shopping-cart" aria-hidden="true"></i></Link><span className="items-count-hidden-menu"> {this.props.itemsInCart} </span></li>
              </ul>
              </div>
          </nav>
        )

  }

}

export default Navbar;
