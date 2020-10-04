import React from "react";
import "../CSS/Product.css";
import ProductCard from "../Components/ProductCard.js";
import classicWatches from "../JSON-DATA.js/classicWatches.js";
import smartWatches from "../JSON-DATA.js/smartwaches.js";

class Products extends React.Component{

  constructor(props){
      super(props);

      this.state = {
        smartWatches:[],
        classicWatches:[]
      }
  }

/*Here we will do this: When it get's generated we*/

  componentDidMount(){
    window.scrollTo(0,0);
    this.setState({
      smartWatches:smartWatches,
      classicWatches:classicWatches
    })

  }

  render(){
    let myCardsSmartWatches = this.state.smartWatches.map(watch=>{
       return <ProductCard img={watch.image} category={"SmartWatches"} key={watch.id} brandName={watch.name} description={watch.description} price={watch.price}/>
    });
    let myCardsClassicWatches = this.state.classicWatches.map(watch=>{
       return <ProductCard img={watch.image} category={"ClassicWatches"} key={watch.id} brandName={watch.name} description={watch.description} price={watch.price}/>
    });
      return(
        <div className="products-container">
        <h1 className="products-header">Our collection</h1>
        <div className="custom-select">

          <select className="watch-categories">
            <option value="">Select Watch Category</option>
            <option value="Classic Watches">Classic Watches</option>
            <option value="SmartWatches">SmartWatches</option>
          </select>
        </div>

        <div className="products-cards-container">
        {myCardsSmartWatches}
        {myCardsClassicWatches}
        </div>
      </div>
      )
  }

}


export default Products;
