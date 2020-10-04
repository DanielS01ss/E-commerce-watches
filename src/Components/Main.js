import React from "react";
import Card from "../Components/Card.js";
import "../CSS/MainComponent.css";
import data from "../JSON-DATA.js/main-sections.js";
import categoryData from "../JSON-DATA.js/categorycard.js";
import CategoryCard from "../Components/CategoryCard.js";


class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      cardsData :[],
      categoryData:[]
    }
  }

  componentDidMount(){
      this.setState({
        cardsData:data
      });
      this.setState({
        categoryData:categoryData
      });

  }

  render(){
    let categoriesDisplay ;
    categoriesDisplay = this.state.categoryData.map(itm=><CategoryCard key={itm.id} image={itm.img} alt={itm.alt} header={itm.collectionName} description={itm.description}/>);

    return(

      <main>
        <h1 className="main-title">Special Autumn Offer (-30%)</h1>
        <img className="autumn-leaf" src={require("../Photos/Other-Icons/leaf.svg")}/>
        {this.state.cardsData.length>0 &&<Card image={this.state.cardsData[0].img} header={this.state.cardsData[0].header} content={this.state.cardsData[0].content}/>}
        <h1 className="main-title">Check out our collections!</h1>
        {this.state.categoryData.length>0&&categoriesDisplay}
      </main>

    )
  }
}

export default Main;
