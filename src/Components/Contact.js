import React from "react";
import "../CSS/Contact.css";

class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      message:'',
      email:'',
      valid:false
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]:evt.target.value
    });
  }

    validate(email) {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i

  return expression.test(String(email).toLowerCase())
}

  handleEmail(evt){
    const emailValidation = document.querySelector(".email-validation");
    if(!this.validate(evt.target.value)){
      emailValidation.classList.remove("not-display");
      this.setState({
        email:''
      })
    }
    else{
      emailValidation.classList.add("not-display");
      this.setState({
        email:evt.target.value
      });
    }

  }

  handleMessage(evt){

       if(this.state.email.length>0 && evt.target.value.length>0){
          this.setState({
            valid:true
          });
       } else{

         this.setState({
           valid:false
         })
       }

  }

  render(){
    return (
      <div>

        <form>
          <h1 className="form-header">Contact Us</h1>
          <label htmlFor="firstName" className="first-name-label">First Name</label><br/>
          <input type="text" name="firstName" onChange={this.handleChange} className="first-name" placeholder="" autoComplete="off"/>
          <br/>
          <label htmlFor="lastName" className="first-name-label">Last Name</label><br/>
          <input type="text" name="lastName" className="first-name" onChange={this.handleChange} placeholder="" autoComplete="off"/>
          <br/>
          <label htmlFor="lastName" className="first-name-label">Email</label><br/>
          <input type="text" name="lastName" className="first-name" onChange={this.handleEmail} placeholder="" autoComplete="off"/>
          <label name="email-validation" className="email-validation not-display">Email is not valid</label>
          <br/>
          <br/>
          <br/>
          <label htmlFor="message">Message:</label><br/>
          <textarea onChange={this.handleMessage}className="text-area" onBlur={this.handleMessage} name="message">
          </textarea>
          <button className={this.state.valid?"send-btn":"not-activated"} disabled={!this.state.valid}>Send!</button>
        </form>
      </div>
    )
  }

}

export default Contact;
