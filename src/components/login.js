import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import { loginModalOperation } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {

  closeLoginModal (e) {
    this.props.loginModalOperation(false);
  };

  render() {
    return (
      <Layer closer={true}
        flush={false}
        overlayClose={true} onClose={(e)=>{this.closeLoginModal(e)}}><span style={{margin:'50px'}}>I'm the layer</span>
      </Layer>
    )
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal } = state.login;
  return { showLoginModal };
}

export default connect(mapStateToProps, { loginModalOperation }) (Login);