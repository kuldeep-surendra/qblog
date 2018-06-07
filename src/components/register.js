import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import LoginForm from 'grommet/components/LoginForm';
import Toast from 'grommet/components/Toast';
import { loginModalOperation } from '../actions';
import { connect } from 'react-redux';

class Register extends Component {

  login (username, password) {
    this.props.loginToApp(username, password);
  }

  closeLoginModal (e) {
    this.props.loginModalOperation(false, false);
  };

  render() {
    return (
      <Layer closer={true}
      flush={false}
      overlayClose={true} 
      onClose={(e)=>{this.closeLoginModal(e)}}> 
        <p>hello</p>
      </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  const { showRegisterModal } = state.login;
  return { showRegisterModal };
}

export default connect(mapStateToProps, { loginModalOperation }) (Register);