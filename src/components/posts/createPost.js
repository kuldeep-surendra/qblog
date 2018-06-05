import React, { Component } from 'react';
import NavHeader from '../commons/header';
import { Box, Footer, FormField, TextInput, Header, Heading, FormFields, Form, Button } from 'grommet';
import { getPostsAction } from '../../actions'
import { connect } from 'react-redux';

class CreatePost extends Component {

  // componentWillMount () {
  //   console.log("compwil")
  //   this.props.getPostsAction();
  // }

  render() {
    return(
      <div>
        <form>
          Title: <TextInput/>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { posts } = state.posts;
//   return { posts };
// }

// export default connect(mapStateToProps, { getPostsAction }) (NewPost);
export default CreatePost;