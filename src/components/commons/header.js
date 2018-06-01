import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import ActionsIcon from 'grommet/components/icons/base/Actions';
import { Redirect } from 'react-router-dom'

import Layer from 'grommet/components/Layer';
import Login from '../login';
import { withRouter } from 'react-router-dom';

import { loginModalOperation } from '../../actions'

class NavBar extends Component {

  getLoginModal (e) {
    this.props.loginModalOperation(true);
  };

  authenticate () {
    if(localStorage.getItem('token') && localStorage.getItem('email')){
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Header fixed={false} float={true} colorIndex='accent-2-a'>
        <Title onClick={() => this.props.history.push('/')}>
          Q-Blog
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Menu icon={<ActionsIcon />}
            responsive={true}
            direction='row'
            dropAlign={{ "right": "right" }}>
            {this.authenticate() ? 
              <div>
                <Anchor href='#' className='anchorColor'>
                  Logout
                </Anchor>
                <Anchor 
                  href='javascript:void(0)' 
                  className='anchorColor' 
                  onClick={() => this.props.history.push('/home')}>
                  Home
                </Anchor>
              </div>
              :
              <div>
                <Anchor href='#'
                  className='active anchorColor'
                  onClick={(e) => this.getLoginModal(e)}>
                  Login
                </Anchor>
                <Anchor href='#' className='anchorColor'>
                  Register
                </Anchor>
              </div>
            }
          </Menu>
        </Box>
        { this.props.showLoginModal ? <Login/> : null}
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal, loginSuccess } = state.login;
  return { showLoginModal, loginSuccess };
}

export default withRouter(connect(mapStateToProps, { loginModalOperation }) (NavBar));