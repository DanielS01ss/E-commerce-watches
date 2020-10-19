import React from "react";
import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import {BrowserRouter as Router , Route,Switch ,Redirect } from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Products from "./Components/Products.js";
import classicWatches from "./JSON-DATA.js/classicWatches.js";
import smartWatches from "./JSON-DATA.js/smartwaches.js";
import NotFound from "./Components/NotFound.js";
import Details from "./Components/Details";
import Cart from "./Components/Cart.js";

import "./CSS/Main.css";

let position;

class App extends React.Component{

  constructor(props){
    super(props);


    this.state = {
      smartWaches:[],
      classicWatches:[],
      selectedCategory:'all',
      selectedWatch:[{
          "id":1,
          "name":"Fossil",
          "image":"fossil",
          "price":"78",
          "category":"ClassicWatches",
          "description":"Case size: 50mm; Band size: 24mm; quartz movement with 3-hand analog display; mineral crystal face Black plated stainless steel case ,black dial with date window and gunmetal tone Arabic numerals"
        }],
      selectedWatchCategory:'',
      cart:[],
      total:0
    }


    this.emptyCart = this.emptyCart.bind(this);
    this.changeOption = this.changeOption.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.componentCleanup = this.componentCleanup.bind(this);
  }





  componentDidMount(){
    this.setState({
      smartWaches:smartWatches,
      classicWatches:classicWatches
    });

    window.addEventListener('beforeunload', this.componentCleanup);


    if(localStorage.getItem("oldState")){

        this.setState(prevState=>{
          prevState = JSON.parse(localStorage.getItem("oldState"));
          return prevState;
        });
    }




}


componentCleanup(){
  localStorage.setItem("oldState",JSON.stringify(this.state));

}

componentWillUnmount(){


}


  handleClick = (elementId,category)=>{
    ///la category vezi sa pui upperCase cand verifici
    ///da cand selectezi sa cauti cauti cu lower case
    let selectedWatch;
    if(category==="SmartWatches"){
       selectedWatch = smartWatches.filter(watch=>watch.id === elementId);
       this.setState({
         selectedWatchCategory:"SmartWatches"
       });
    }
    else if(category==="ClassicWatches"){
        selectedWatch = classicWatches.filter(watch=>watch.id === elementId);
        this.setState({
          selectedWatchCategory:"ClassicWatches"
        });
    }
    this.setState({
      selectedWatch:selectedWatch
    });

  }

  changeOption(category){

    this.setState({
      selectedCategory:category
    })
  }


  increaseQuantity(id,category){


    if(category=="SmartWatches"){
      this.setState(prevState=>{
        for(const watch of prevState.smartWatches){
           if(watch.id==id){
              watch.itemCount++;
              prevState.total+=watch.price;
           }

        }

        return prevState;
      });

    }else{
     this.setState(prevState=>{
       for(const watch of prevState.classicWatches){
          if(watch.id==id){
              watch.itemCount++;
              prevState.total+=watch.price;
          }
       }
       return prevState;
     });
    }
  }

  decreaseQuantity(id,category){
    if(category=="SmartWatches"){
      this.setState(prevState=>{
        for(const watch of prevState.smartWatches){
           if(watch.id==id){


             if(watch.itemCount-1==0)
             {

               this.removeItem(id,category);
             }
             else{
               watch.itemCount--;
               prevState.total-=watch.price;
             }
           }
        }
        return prevState;
      });

    }else{
     this.setState(prevState=>{
       for(const watch of prevState.classicWatches){
          if(watch.id==id)
          {
            watch.itemCount--;
            prevState.total-=watch.price;
            if(watch.itemCount==0)
            {
              this.removeItem(id,category);
            }
            else{
              prevState.total-=watch.price;
            }
          }

       }
       return prevState;
     });
    }
  }

  addItem(item){
    this.setState(prevState=>{
      prevState.cart.push(item);
      return prevState;
    });
     if(item.category=="SmartWatches"){
       this.setState(prevState=>{
         for(const watch of prevState.smartWatches){
            if(watch.id==item.id){
                watch.inCart = true;
            }

         }
         prevState.total+=item.price;
         return prevState;
       });

     }else{
      this.setState(prevState=>{
        for(const watch of prevState.classicWatches){
           if(watch.id==item.id)
           watch.inCart = true;
        }
        prevState.total+=item.price;
        return prevState;
      });
     }

  }

  removeItem(id,category){
    if(category=="SmartWatches"){

      this.setState(prevState=>{
        for(const watch of prevState.smartWatches){
           if(watch.id==id){
             watch.inCart = false;
              watch.itemCount = 1;

           }
        }
        for(let i=0;i<prevState.cart.length;i++){
          if(prevState.cart[i].id==id)
          {
            position = i;
          }
        }
        prevState.total -= prevState.cart[position].price * prevState.cart[position].itemCount;
        prevState.cart.splice(position,1);
        return prevState;
      });

    }else{
     this.setState(prevState=>{
       for(const watch of prevState.classicWatches){
         if(watch.id==id){
           watch.inCart = false;
            watch.itemCount = 1;
            position = id;
         }
       }
       for(let i=0;i<prevState.cart.length;i++){
         if(prevState.cart[i].id==id)
         {
           position = i;
         }
       }
       prevState.total -= prevState.cart[position].price * prevState.cart[position].itemCount;
       prevState.cart.splice(position,1);
       return prevState;
     });
    }

  }

  emptyCart(){
    let newClassicWatches = this.state.classicWatches;
    let newSmartWatches = this.state.smartWatches;


    for(const item of this.state.cart){
        if(item.category=="ClassicWatches")
        {
          newClassicWatches[item.id].inCart = false;
          newClassicWatches[item.id].itemCount = 1;
        }
        else{
          newSmartWatches[item.id].inCart = false;
          newSmartWatches[item.id].itemCount = 1;
        }
    }

    this.setState(prevState=>{
      prevState.smartWaches = newSmartWatches;
      prevState.classicWatches = newClassicWatches;
      prevState.cart = [];
      prevState.total = 0;
      return prevState;
    })
  }

  render(){
    return(
      <div>
      <Router>
      <Switch>
        <Route exact path="/">
         <div className="main-img-container">

       <img className="main-logo" src={require("./Photos/Main-background/Main-bkg.jpg")}/>
            <Navbar itemsInCart={this.state.cart.length}/>
            <Main handleOption={this.changeOption}/>
         </div>

         </Route>
         <Route exact path="/about">
                <Navbar itemsInCart={this.state.cart.length}/>
          <img className="main-logo" src={require("./Photos/Main-background/workshop.jpg")}/>
              <About/>
         </Route>
         <Route exact path="/contact">
            <Navbar itemsInCart={this.state.cart.length}/>
            <img className="main-logo" src={require("./Photos/Main-background/Contact-us.jpg")}/>
            <Contact/>
         </Route>
         <Route exact path="/products">
          <Navbar itemsInCart={this.state.cart.length}/>
          <img className="main-logo" src={require("./Photos/Main-background/products-background.jpg")}/>

          <Products selectedCategory={this.state.selectedCategory} smartWatches={this.state.smartWaches} classicWatches={this.state.classicWatches} addItem={this.addItem} handleClick={this.handleClick}/>
         </Route>
         <Route exact path="/details">
          <Navbar itemsInCart={this.state.cart.length}/>
          <Details watch={this.state.selectedWatch} selectedCategory={this.state.selectedWatchCategory}/>
         </Route>
         <Route exact path="/cart">
         <Navbar itemsInCart={this.state.cart.length}/>
          <img className="main-logo" src={require("./Photos/Main-background/cart.jpg")}/>
          <Cart total={this.state.total} cart={this.state.cart} emptyCart={this.emptyCart} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity} addItem={this.addItem} removeItem={this.removeItem} />
         </Route>
          <Redirect to="/" />
          </Switch>
         <Footer/>
      </Router>
      </div>
    )
  }
}

export default App;
