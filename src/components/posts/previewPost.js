import React, { Component } from 'react';
import { Button } from 'grommet';
import { postsFormDataAction, setNewPostMode, savePostAction } from '../../actions'
import { connect } from 'react-redux';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ReactHtmlParser from 'react-html-parser';

class PreviewPost extends Component {

  savePost () {
    this.props.setNewPostMode('createMode');
    this.props.savePostAction(this.props.post_form_data);
    this.props.postsFormDataAction({});
  }

  render() {
    return(
      <div>
        <Button label='Edit << ' onClick={()=> this.props.setNewPostMode('createMode') }/>
        <center><h2>{this.props.post_form_data.title}</h2><br/></center>
        <div className='editorStyles'>{ ReactHtmlParser(this.props.post_form_data.description) }</div><br/><br/>
        <div className='editorStyles'>{ ReactHtmlParser(this.props.post_form_data.content) }</div><br/><br/>
        {(this.props.post_form_data.title && this.props.post_form_data.content) ? 
          <Button label='Save ' onClick={()=> this.savePost() }/>
        : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { post_form_data } = state.posts;
  return { post_form_data };
}

export default connect(mapStateToProps, { postsFormDataAction, setNewPostMode, savePostAction }) (PreviewPost);
// export default PreviewPost;