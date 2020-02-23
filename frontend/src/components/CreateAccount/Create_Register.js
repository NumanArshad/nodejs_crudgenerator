import React, { Component } from "react";
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {username:'',password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value})
    }
 handleSubmit(event) {
        this.props.handleRegister(this.state.username,this.state.password)
    }
  componentWillMount() {
        // custom rule will have name 'isPasswordMatch'
        // ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        //     if (value !== this.state.user.password) {
        //         return false;
        //     }
        //     return true;
        // });
    }

    render() {
        var errorMessage = (this.props.status != undefined && this.props.status=="REGISTER_EXISTING") ? "This username already exists" :""

        return (
               <div style={{padding:'6%',width:'40%'}} >
               <h1>Register Here</h1>
               <p style={{color: 'red'}}>{errorMessage}</p>
               <input   id="username" label="Username" type="text" onChange={this.handleChange} value={this.state.username} />
               <br /><br />
               <input   id="password" label="Password" type="password" onChange={this.handleChange} value={this.state.password} />
               <br /><br />
               <button onClick={this.handleSubmit} type="submit">Register</button>
            </div>
        );
    }
}
export default Register
