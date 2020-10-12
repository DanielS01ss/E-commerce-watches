import React from "react";
import "../CSS/Cart.css";

class Cart extends React.Component{


  constructor(){
    super();

  }

/*We need to check and see if the cart is empty*/
/*  UNDER 1000 PX WE CHANGE THE LAYOUT */
  render(){
    const elemnts = this.props.cart.map(watch=>  <div className="cart-element" key={watch.key}>
        <img className="product-preview" src={require(`../Photos/${watch.category}/${watch.image}.jpg`)}/>
        <p className="cart-product-name-item">{watch.name}</p>
        <p className="cart-product-price-item">{watch.price}$</p>
        <p><button className="increase-btn" onClick={()=>this.props.increaseQuantity(watch.id,watch.category)}>+</button> {watch.itemCount} <button className="decrease-btn" onClick={()=>this.props.decreaseQuantity(watch.id,watch.category)}>-</button></p>
        <p className="trash-can-icon" onClick={()=>this.props.removeItem(watch.id,watch.category)}><i className="fas fa-trash" aria-hidden="true"></i></p>
        <p className="small-screen-item-text" id="no-display">{watch.price * watch.itemCount}$</p>
      </div>);

    return(

      <div>
      {this.props.cart.length>0?
        <div>
        <p className="column-headers-container"> <span className="column-header">PRODUCT IMAGE</span>  <span className="column-header">NAME OF PRODUCT</span> <span className="column-header">PRICE</span> <span className="column-header">QUANTITY</span>  <span className="column-header">ELIMINATE</span>  <span className="column-header">TOTAL</span> </p>
          {elemnts}

          <div className="cart-footer">
              <p className="cart-footer-total"><span className="empty-cart-text">Total:{this.props.total}</span></p>
              <button className="empty-cart-btn" onClick={this.props.emptyCart}>Empty Cart</button>
          </div>
        </div>
        :
        <div>
          <p className="empty-cart-msg">YOUR CART IS EMPTY</p>
        </div>
       }
      </div>
    )

  }

}


export default Cart;
