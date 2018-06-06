import React, { Component } from 'react';
import { TextInput, Button } from 'grommet';
import { postsFormDataAction, setNewPostMode } from '../../actions'
import { connect } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class CreatePost extends Component {

  constructor(props) {
    super(props);
    let editorState;
    if (props.post_form_data.content) {
      const blocksFromHTML = htmlToDraft(props.post_form_data.content);
      const contentState = ContentState.createFromBlockArray(blocksFromHTML);
      editorState = EditorState.createWithContent(contentState);
    } else {
      editorState = EditorState.createEmpty();
    }

    this.state = {
      editorState,
      editorContentValue: ''
    };
  }

  handleChange = editorState => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({editorContentValue: content});
  }

  preview () {
    this.props.setNewPostMode('previewMode');
    const givenTitle = this.state.titleValue || this.props.post_form_data.title;
    const givenDescription = this.state.descriptionValue || this.props.post_form_data.description;
    const givenContent = this.state.editorContentValue || this.props.post_form_data.content;
    this.props.postsFormDataAction({title: givenTitle, description: givenDescription, content: givenContent});
  }

  updateTitle (e) {
    this.setState({titleValue: e.target.value});
  }

  updateDescription (e) {
    this.setState({descriptionValue: e.target.value});
  }

  render() {

    return(
      <div>
        <form>
          Title: <TextInput name='title' onDOMChange={(e) => this.updateTitle(e)} value={this.props.post_form_data.title}/><br/><br/>
          <label>Description: </label><br/><br/>
          <textarea 
            className='descriptionBox editorStyles'
            onChange={(e) => this.updateDescription(e)} 
            value={this.props.post_form_data.description}/><br/><br/>
          <label>Content: </label><br/><br/>
          <div className='editorStyles'>
            <Editor
              defaultEditorState={ this.state.editorState }
              onEditorStateChange={ this.handleChange }
              editorClassName='editorClassName'
            />
          </div><br/>
          <Button label='Preview >>' onClick={()=> this.preview() }/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { post_form_data } = state.posts;
  return { post_form_data };
}

export default connect(mapStateToProps, { postsFormDataAction, setNewPostMode }) (CreatePost);