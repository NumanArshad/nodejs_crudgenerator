import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        //this.props.handleBackClick();
         //this.props.history.push('/create_todo')
    }

    render() {
        return (
          <div>
            <h1>You have been logged in successfully</h1>
            <button onClick={this.handleClick}>Create TodoList</button>
            </div>
        );
    }
}



export default withRouter(LoginSuccess);
