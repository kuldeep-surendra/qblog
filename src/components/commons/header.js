import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import ActionsIcon from 'grommet/components/icons/base/Actions';

import Layer from 'grommet/components/Layer';
import Login from '../login';

import { loginModalOperation } from '../../actions'

class NavBar extends Component {

  getLoginModal (e) {
    this.props.loginModalOperation(true);
  };

  render() {
    return (
      <Header fixed={false} float={true} colorIndex='accent-2-a'>
        <Title>
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
            <Anchor href='#'
              className='active anchorColor'
              onClick={(e) => this.getLoginModal(e)}>
              Login
            </Anchor>
            <Anchor href='#' className='anchorColor'>
              Register
            </Anchor>
            <Anchor href='#' className='anchorColor'>
              Third
            </Anchor>
          </Menu>
        </Box>
        { this.props.showLoginModal ? <Login/> : null}
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  const { showLoginModal } = state.login;
  return { showLoginModal };
}

export default connect(mapStateToProps, { loginModalOperation }) (NavBar);