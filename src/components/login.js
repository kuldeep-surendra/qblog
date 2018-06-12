import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import LoginForm from 'grommet/components/LoginForm';
import Toast from 'grommet/components/Toast';
import { loginModalOperation, loginToApp } from '../actions';
import { connect } from 'react-redux';
import auth0 from 'auth0-js';
import Auth from '../Auth';

class Login extends Component {

  constructor () {
    super();
    // this.handleAuthentication = this.handleAuthentication.bind(this);
  }
  
  login (username, password) {
    const auth = new Auth();
    // this.props.loginToApp(username, password);
    auth.login();
  }

  closeLoginModal (e) {
    this.props.loginModalOperation(false, false);
  };

  render() {
    return (
      <Layer 
        closer={true}
        flush={false}
        overlayClose={true} 
        onClose={(e)=>{this.closeLoginModal(e)}}>
        { this.props.loginInvalid ? 
          <Toast status='critical'>
            Invalid Email or Password
          </Toast> 
        : 
          null 
        }
        <LoginForm 
        title='Login'
        rememberMe={false} 
        onSubmit={(username, password) => this.login(username, password)}/>
      </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal, loginInvalid, loginSuccess } = state.login;
  return { showLoginModal, loginInvalid, loginSuccess };
}

export default connect(mapStateToProps, { loginModalOperation, loginToApp }) (Login);