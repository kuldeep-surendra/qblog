import React, { Component } from 'react';
import NavHeader from '../commons/header';
import { Box, Split, Section } from 'grommet';
import { connect } from 'react-redux';
import { getPostAction } from '../../actions'
import ReactHtmlParser from 'react-html-parser';

class ShowPost extends Component {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.getPostAction(this.props.params.id);
  }

  render() {
    return(
      <Box>
        <NavHeader/><br/><br/>
        <Box margin='large' responsive={true}>
          <center><div>{ ReactHtmlParser(this.props.show_post.description) }</div><br/></center>
        </Box><br/>
        <Box margin='large' responsive={true}>
          <center><div>{ ReactHtmlParser(this.props.show_post.content) }</div><br/></center>
        </Box><br/>
        <Box justify='center' pad='large' separator='top' margin='large' pad='small'>
          <b>Comments:</b>
          {this.props.show_post.comments && this.props.show_post.comments.map(comment => {
            return (
              <Split key={comment.id} fixed={false} justify='center'>
                <Box/>
                <Box>
                  <Section pad='small'><b>{comment.user.username} :</b></Section><br/>
                </Box>
                <Box>
                  <Section pad='small'>{comment.content}</Section><br/>
                </Box>
                <Box/>
              </Split>
            )
          })}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  const { show_post } = state.posts;
  return { show_post };
}

export default connect(mapStateToProps, { getPostAction }) (ShowPost);