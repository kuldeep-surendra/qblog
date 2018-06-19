import React, { Component } from 'react';
import NavHeader from './commons/header';
import {Card, Anchor, Box, Columns} from 'grommet';
import browserHistory from '../history';

class Home extends Component {

  render() {
    return(
      <div>
        <NavHeader/><br/>
        <Box margin='large' responsive={true}>
          <Columns>
            <Box>
              <Card label="Blog post"
              heading='Create Blog Post'
              description='Create your blog and spread knowledge!'
              link={<Anchor onClick={() => browserHistory.push('/newPost')}
              label='Create >>' />} />
            </Box>
            <Box>
              <Card label='All Posts'
              heading='Posts Feed'
              description='Get details of all posts, explore knowledge.'
              link={<Anchor  onClick={() => browserHistory.push('/posts')}
              label='List >>' />} />
            </Box>
            <Box>
              <Card label='Sample Table'
              heading='Sample Heading'
              description='Sample description providing more details.'
              link={<Anchor href='' onClick={() => browserHistory.push('/sampleTable')}
              label='Sample Table' />} />
            </Box>
          </Columns>
        </Box>
      </div>
    );
  }
}

export default Home;