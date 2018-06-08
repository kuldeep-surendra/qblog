import React, { Component } from 'react';
import { Layer, Header, Heading } from 'grommet';
import { loginModalOperation } from '../../actions';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import RegisterForm from './registerForm';

class RegisterModal extends Component {

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
        pad='small'
        size='large'
        onClose={(e)=>{this.closeLoginModal(e)}}> 
        <Header>
          <Heading tag='h2'>
            Register
          </Heading>
        </Header>
        <RegisterForm/>
      </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  const { showRegisterModal } = state.login;
  return { showRegisterModal };
}

// Register =;

export default connect(mapStateToProps, { loginModalOperation }) (RegisterModal);