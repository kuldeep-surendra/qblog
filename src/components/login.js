import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import LoginForm from 'grommet/components/LoginForm';
// import FormFields from 'grommet/components/FormFields';
// import Header from 'grommet/components/Header';
// import Heading from 'grommet/components/Heading';
// import Footer from 'grommet/components/Footer';
// import Button from 'grommet/components/Button';
import { loginModalOperation, loginToApp } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {

  login (username, password) {
    console.log(username, password)
    this.props.loginToApp(username, password);
  }

  closeLoginModal (e) {
    this.props.loginModalOperation(false);
  };

  render() {
    return (
      <Layer 
        closer={true}
        flush={false}
        overlayClose={true} 
        onClose={(e)=>{this.closeLoginModal(e)}}>
        <LoginForm 
        title='Login'
        rememberMe={false} 
        colorIndex='accent-2-a'
        onSubmit={(username, password) => this.login(username, password)}/>
      </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal } = state.login;
  return { showLoginModal };
}

export default connect(mapStateToProps, { loginModalOperation, loginToApp }) (Login);