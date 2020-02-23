
import React, { Component } from "react";
import { connect } from "react-redux";

import Login_Failure from './Login_Failure'
import Login_Loading from './Login_loading'
import Login_signIn from './Login_signIn'
import LoginSuccess from './Login_Success'
import { loginServer } from '../../server/LoginServer';
import { login_Status } from '../../constants/Login';
import { login_Actions } from '../../constants/Login'
//import CustomPaginationActionsTable from './table'
//import SpanningTable from './Table'
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    login_status: state.login_Reducer.login_status,
      userId:state.login_Reducer.userId
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

    handleSignIn: (username,password) => { dispatch(loginServer.handleSignIn(username,password)) },
    handleBackClick : () =>{ dispatch({ type: login_Actions.login_SignIn.NEW }) },
    handleupload:(file)=>{dispatch(loginServer.handleupload(file))}
  };
};

class LoginView extends Component {

  getScreen(status) {
    console.log("I am from login Component getScreen: " + status);
    switch (status) {
      case login_Status.login_SignIn.NEW:
        return (
         <Login_signIn handleSignIn={this.props.handleSignIn}  handleupload={this.props.handleupload} />
      
          );
        break;
      case login_Status.login_SignIn.FAILURE:
        return (
          <Login_Failure />
        );
      break;
      case login_Status.login_SignIn.AUTHORIZED:
        this.props.history.push('/create_todo/' + this.props.userId);
           alert(this.props.userId);
        return (
         <LoginSuccess handleBackClick={this.props.handleBackClick} />
        );
        break;
        case login_Status.login_SignIn.NOT_AUTHORIZED:
          return (
            <Login_signIn status={status} handleSignIn={this.props.handleSignIn} />
          );
          break;
        case login_Status.login_SignIn.LOADING:
          return (
            <Login_Loading />
          );
          break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          {this.getScreen(this.props.login_status)}
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);


// style={{width: '800px', margin: '0 auto', overflow: 'auto', height: '700px'}}
