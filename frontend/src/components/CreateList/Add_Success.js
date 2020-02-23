
import React, { Component } from 'react';
class AddWord extends React.Component {
  constructor(props) {
    super(props);
   this.state = { text:''};
     
    this.handleChange = this.handleChange.bind(this)
	    //this.state={nameC:"numan",PasswordC:"usama"};
    //this.state={name:"",Password:"",nameC:"numan",PasswordC:"123"};
    
    this.handleSubmit = this.handleSubmit.bind(this); 
}
    /*this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
   */

  handleChange(event) {
  this.setState({ text: event.target.value });
 
}

/*
handleChange1(event) {
 this.setState({ name: event.target.value });
}
  handleChange2(event) {
    this.setState({ Password: event.target.value });
 }*/
  handleSubmit(event) {
    this.props.getValue(this.state.text)
      
    //var nameC="numan",PasswordC="123";
    /*if(this.state.name===this.state.nameC && this.state.Password===this.state.PasswordC){
      alert("correct");
    }
    else{
      alert("incorrect");
    }*/
    event.preventDefault(); 
}

  render() {
    return (
                 <div style={{padding:'6%',width:'40%'}} >
            <h1>Create  todo for login user</h1>
        <form onSubmit={this.handleSubmit} >
        <label>
          Enter Word:
          <input type="text"  onChange={this.handleChange} /></label>
      
          <input type="submit" value="Add" />
 
      </form>
        </div>
    ); }}
export default AddWord;
