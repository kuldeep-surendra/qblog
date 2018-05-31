import React, { Component } from 'react';

import NavHeader from './commons/header';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';


// import '../../node_modules/grommet-css';


class Main extends Component {
  render() {
    return (
      <Box responsive={true}>
        <NavHeader/>
        <br/><br/><br/><br/>
        <Hero
          backgroundColorIndex='dark'>
          <Image src='../../sample.jpg'
          full={true}
          size='large' />
        </Hero>
      </Box>
    );
  }
}

export default Main;