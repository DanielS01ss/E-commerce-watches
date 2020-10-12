import React from "react";
import "../CSS/ProductCard.css";
import {Link} from "react-router-dom";

class ProductCard extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="product-card">
      <Link to="/details" onClick={()=>this.props.handleClick(this.props.prodId,this.props.category)}>
        <img className="product-card-img" src={require(`../Photos/${this.props.category}/${this.props.img}.jpg`)} className="product-card-img" alt="watch-img"/>
        <h1 className="product-card-description">{this.props.brandName}</h1>
        <p className="price-tag">
          <span className="price-title">Price: </span>
          {this.props.price}$$
        </p>
       </Link>
        <button className="add-to-cart-btn" disabled={this.props.watch.inCart} onClick={()=>this.props.addItem(this.props.watch)}>{this.props.watch.inCart?<span>In Cart</span>:<span>Add to cart <span className="cart-logo"><i className="fas fa-shopping-cart" aria-hidden="true"></i></span></span>}</button>
      </div>
    )
  }

}

export default ProductCard;
