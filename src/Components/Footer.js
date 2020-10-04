import React from "react";
import "../CSS/Footer.css";

class Footer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <footer>
      <hr/>
      <div className="logo-container">
      <a href="https://www.linkedin.com/in/daniel-stanculescu-441901159/" target="blank">  <img className="logo" src={require("../Photos/Logos/linkedin-logo.png")} alt='linkedin logo'/></a>
        <a href="https://www.facebook.com/profile.php?id=100009479034399" target="blank"><img className="logo" src={require("../Photos/Logos/facebook.svg")} alt="facebook-logo"/></a>
        <a href="https://github.com/DanielS01ss" target="blank"><img className="logo" src={require("../Photos/Logos/github-logo.png")} alt="facebook-logo"/></a>
        </div>

      </footer>
    )
  }

}

export default Footer;
