import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Title, Menu, Box, Anchor, ActionsIcon, Toast } from 'grommet';

import Login from '../login';
import browserHistory from '../../history';

import { loginModalOperation, logoutOfApp } from '../../actions'
import RegisterModal from '../register/registerModal';

class NavBar extends Component {

  getLoginModal (e) {
    this.props.loginModalOperation(true, false);
  };

  getRegisterModal (e) {
    this.props.loginModalOperation(false, true);
  };

  authenticate () {
    if(localStorage.getItem('access_token') && localStorage.getItem('email')){
      return true;
    } else {
      return false;
    }
  }

  logout () {
    this.props.logoutOfApp();
  }

  render() {
    return (
      <Header fixed={false} float={true} colorIndex='accent-2-a'>
        <Title onClick={() => browserHistory.push('/')}>
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
                <Anchor
                   className='anchorColor'
                   onClick={() => this.logout()}>
                  Logout
                </Anchor>
                <Anchor 
                  className='anchorColor' 
                  onClick={() => browserHistory.push('/home')}>
                  Home
                </Anchor>
              </div>
              :
              <div>
                <Anchor
                  className='active anchorColor'
                  onClick={(e) => this.getLoginModal(e)}>
                  Login
                </Anchor>
                <Anchor className='anchorColor'
                   onClick={(e) => this.getRegisterModal(e)}>
                  Register
                </Anchor>
              </div>
            }
          </Menu>
        </Box>
        { this.props.showLoginModal ? <Login/> : null}
        { this.props.showRegisterModal ? <RegisterModal/> : null}
        { (this.props.registerSuccess === 'Registered successfully') ? 
          <Toast status='ok' size='small'>
            Registered successfully !
          </Toast>
          :
          (this.props.registerSuccess &&
             <Toast status='critical' size='small'>
            {this.props.registerSuccess}
          </Toast>)
        }
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal, showRegisterModal, loginSuccess } = state.login;
  const { registerSuccess } = state.register;
  return { showLoginModal, showRegisterModal, loginSuccess, registerSuccess };
}

export default connect(mapStateToProps, { loginModalOperation, logoutOfApp }) (NavBar);