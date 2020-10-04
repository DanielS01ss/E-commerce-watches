import React from "react";
import "../CSS/ProductCard.css"

class ProductCard extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="product-card">
        <img className="product-card-img" src={require(`../Photos/${this.props.category}/${this.props.img}.jpg`)} className="product-card-img" alt="watch-img"/>
        <h1 className="product-card-description">{this.props.brandName}</h1>
        <p className="price-tag">
          <span className="price-title">Price: </span>
          {this.props.price}$$
        </p>
        <button className="add-to-cart-btn">Add to cart <span className="cart-logo"><i className="fas fa-shopping-cart" aria-hidden="true"></i></span></button>
      </div>
    )
  }

}

export default ProductCard;
