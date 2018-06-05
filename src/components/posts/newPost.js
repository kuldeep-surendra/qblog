import React, { Component } from 'react';
import NavHeader from '../commons/header';
import { Box, Article, Section, Headline, Split, Tabs, Tab, Paragraph} from 'grommet';
import { getPostsAction } from '../../actions'
import { connect } from 'react-redux';
import CreatePost from './createPost';

class NewPost extends Component {

  // componentWillMount () {
  //   console.log("compwil")
  //   this.props.getPostsAction();
  // }

  render() {
    return(
      <div>
        <NavHeader/><br/><br/>
        <Box margin='large' responsive={true}>
          <Tabs justify='start'>
            <Tab title='Create'>
              <CreatePost/>
            </Tab>
            <Tab title='Preview'>
              <Paragraph>
                Second contents
              </Paragraph>
            </Tab>
          </Tabs> 
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts } = state.posts;
  return { posts };
}

export default connect(mapStateToProps, { getPostsAction }) (NewPost);
// export default Posts;