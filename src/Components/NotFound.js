import React from "react";
import "../CSS/NotFound.css";

class NotFound extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
      window.scrollTo(0,0);

  }

  render(){
    return(
      <div className="msg-container">
        <h1 className="not-found-title">PAGE NOT FOUND</h1>
      </div>
    );
  }
}

export default NotFound;
