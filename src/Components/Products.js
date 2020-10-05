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
        classicWatches:[],
        selectValue:"classicWatches"
      }
  }

/*Here we will do this: When it get's generated we*/

  componentDidMount(){
    window.scrollTo(0,0);
    this.setState({
      smartWatches:smartWatches,
      classicWatches:classicWatches,
      selectValue:this.props.selectedCategory
    });

  }

 handleOption = (evt)=>{
   this.setState({
     selectValue:evt.target.value
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

          <select value={this.state.selectValue} onChange={this.handleOption} className="watch-categories">
            <option value="none">Select Watch Category</option>
            <option value="classicWatches">Classic Watches</option>
            <option value="smartWatches">SmartWatches</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="products-cards-container">
        {this.state.selectValue==="smartWatches"&&myCardsSmartWatches}
        {this.state.selectValue==="classicWatches"&&myCardsClassicWatches}
        {this.state.selectValue=="all"&& myCardsSmartWatches}
        {this.state.selectValue=="all"&&myCardsClassicWatches}
        </div>
      </div>
      )
  }

}


export default Products;
