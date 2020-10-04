import React from "react";
import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import {BrowserRouter as Router , Route,Switch } from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Products from "./Components/Products.js";

import "./CSS/Main.css";

class App extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <Router>
      <Switch>
        <Route exact path="/">
         <div className="main-img-container">

       <img className="main-logo" src={require("./Photos/Main-background/Main-bkg.jpg")}/>
            <Navbar/>
            <Main/>
         </div>
         </Route>
         <Route exact path="/about">
                <Navbar/>
          <img className="main-logo" src={require("./Photos/Main-background/workshop.jpg")}/>
              <About/>
         </Route>
         <Route exact path="/contact">
            <Navbar/>
            <img className="main-logo" src={require("./Photos/Main-background/Contact-us.jpg")}/>
            <Contact/>
         </Route>
         <Route exact path="/products">
          <Navbar/>
          <img className="main-logo" src={require("./Photos/Main-background/products-background.jpg")}/>
          <Products/>
         </Route>
          </Switch>
         <Footer/>
      </Router>
      </div>
    )
  }
}

export default App;
