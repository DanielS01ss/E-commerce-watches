import React from "react";
import "../CSS/Card.css";


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
          <button className="profit-btn">Profit now!!</button>
      </div>
    )
  }

}

export default Card;
