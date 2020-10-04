import React ,{useEffect} from "react";
import "../CSS/Navbar.css";
import {Link} from "react-router-dom";

class Navbar extends React.Component{

  constructor(props){
    super(props);

  }
componentDidMount(){
window.scrollTo(0, 0)
}

  render(){
        return(
          <nav className="navbar" id="nav">
          <div className="items-container">
          <p className="main-logo">Daniel's Watches</p>
            <ul className="nav-items-container">
            <Link to="/" style={{textDecoration:"none"},{color:"inherit"}}> <li className="nav-item itm">Home</li></Link>
            <li className="nav-item itm">Products</li>
            <Link to="/about" style={{textDecoration:"none"},{color:"inherit"}}><li className="nav-item itm">About us</li>
            <li className="nav-item itm">Contact </li>
            <li className="nav-item cart"><i className="fas fa-shopping-cart" aria-hidden="true"></i><span className="items-count">0</span></li></Link>
            </ul>
          </div>
              <div className="menu-icon">
                <span className="line large"></span>
                <span className="line large"></span>
                <span className="line large"></span>
              </div>
              <div className="hidden-menu hidden">
              <ul>
                <Link to="/" style={{textDecoration:"none"},{color:"inherit"}}><li className="nav-item-side">Home</li></Link>
                <li className="nav-item-side">Products</li>
                <Link to="/" style={{textDecoration:"none"},{color:"inherit"}}><li className="nav-item-side">About us</li></Link>
                <li className="nav-item-side">Contact </li>
                <li className="nav-item-side"><i className="fas fa-shopping-cart" aria-hidden="true"></i><span className="items-count-hidden-menu">0</span></li>
              </ul>
              </div>
          </nav>
        )

  }

}

export default Navbar;
