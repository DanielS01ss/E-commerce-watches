import React , {useEffect} from "react";
import "../CSS/About.css";
import {Link} from "react-router-dom";

class About extends React.Component{

  constructor(props){
      super(props);
  }

  componentDidMount(){
   window.scrollTo(0, 0);
  const hamburgerMenu = document.querySelector(".menu-icon");
  const hiddenMenu = document.querySelector(".hidden-menu");
  if(hiddenMenu.classList.contains("open")){
    hiddenMenu.classList.remove("open");
    hiddenMenu.classList.add("hidden");
  }
  setTimeout(function(){
    if(hamburgerMenu.classList.contains("open")){
      hamburgerMenu.classList.remove("open");
    }

  },50)
  }


  render(){
    return(
      <div>
        <h1 className="about-title">It all started with a small passion..</h1>
        <div className="about-card">
          <img alt="clock-logo" className="clock-logo" src={require("../Photos/Main-background/repair.jpg")}/>
          <p className="story-container">
            It all started with a man who had a passion in repairing watches. His father learned him
            how to repair them since he was a little kid.After he grew a dream grew up inside him:
            to build the biggest watch retail store. So he started purchasing cheap watches and selling them
            with a little bigger price. After 5 years he moved his buissniess online also. The rest is history...
          </p>
        </div>
         <div className="retail-card">
          <img alt="retail" className="retail-photo" src={require("../Photos/Main-background/retail.jpg")}/>
          <p className="add-text">Now we are the biggest watch store from eastern europe</p>
          <p className="add-text">You should check our dope offers: </p>
          <button className="store-btn"><Link style={{color:"#fff",textDecoration:"none"}} to="/products">Take me to the store!!</Link></button>
        </div>
      </div>
    );
  }
}

export default About;
