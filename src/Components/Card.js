import React from "react";
import "../CSS/Card.css";
import {Link} from "react-router-dom";

class Card extends React.Component{

  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="card-container">
          <img className="card-img" src={require(`../Photos/Subsections/${this.props.image}.jpg`)}/>
          <h1 className="card-header">{this.props.header}</h1>
          <p className="card-data">{this.props.content}</p>
          <button className="profit-btn"><span className="btn-text"><Link to="/products" style={{textDecoration:"none"},{color:"inherit"}}>Profit now!!</Link></span></button>
      </div>
    )
  }

}

export default Card;
