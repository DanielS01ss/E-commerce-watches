import React from "react";
import "../CSS/CategoryCard.css";

class CategoryCard extends React.Component{

  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="category-card-container">
          <img className="category-img" src={require(`../Photos/Subsections/${this.props.image}.jpg`)} alt={this.props.alt}/>
          <h1 className="category-header">{this.props.header}</h1>
          <p className="category-description">{this.props.description}</p>
          <button className="category-shop-btn">Go Shop</button>
      </div>
    );
  }

}

export default CategoryCard;
