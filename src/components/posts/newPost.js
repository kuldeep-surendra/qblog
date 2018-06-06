import React, { Component } from 'react';
import NavHeader from '../commons/header';
import { Box, Split} from 'grommet';
import { connect } from 'react-redux';
import CreatePost from './createPost';
import PreviewPost from './previewPost';
import { setNewPostMode } from '../../actions'

class NewPost extends Component {

  render() {
    return(
      <div>
        <NavHeader/><br/><br/>
        <Box margin='large' responsive={true}>
          <Split fixed={false}>
            <Box colorIndex='neutral-1'
              justify='start'
              align='start'
              pad='small'>
              Create
            </Box>
            <Box colorIndex='neutral-2'
              justify='start'
              align='start'
              pad='small'>
              Preview
            </Box>
          </Split><br/>
          {(this.props.new_post_mode === 'createMode') ? 
            <CreatePost/>
            :
            <PreviewPost/>
          }
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { new_post_mode } = state.posts;
  return { new_post_mode };
}

export default connect(mapStateToProps, { setNewPostMode }) (NewPost);