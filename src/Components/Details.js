import React from "react";
import {Link} from "react-router-dom";
import "../CSS/Details.css";

class Details extends React.Component{

  constructor(props){
    super(props);
  }

 render(){
   return(
     <div className="details-container">

      { this.props.watch.length ?
      <div className="description-card">
        <img className="details-cover" src={require("../Photos/Main-background/details.jpg")} alt="details page image" />
      <div className="details-card-full-container">
        <p className="description-header">{this.props.watch[0].name}</p>
        <img className="product-img" src={require(`../Photos/${this.props.watch[0].category}/${this.props.watch[0].image}.jpg`)} alt={this.props.watch[0].name}/>
        <div className="details-text-container">
          <p className="details-model">Model:{this.props.watch[0].name}</p>
          <p className="details-price">Price: {this.props.watch[0].price}$</p>
          <p className="details">Details about the product:</p>
          <p className="details-text">{this.props.watch[0].description}</p>
          <div className="buttons-container">

         </div>
         <Link to="/products" className="back-btn"><span>Back</span></Link>
         <Link to="/" className="cart-details-btn"><span>Add to cart</span></Link>
        </div>
        </div>
      </div>

      :
        <div className="not-found-product">
          <img src={require("../Photos/Main-background/what-are-you-looking-here.jpg")} className="not-found-pic" alt="what are you looking here"/>
          <h1>HMMM,WHAT ARE YOU LOOKING HERE???</h1>
        </div>
    }
     </div>
   );
 }
}

export default Details;
