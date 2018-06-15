import React, { Component } from 'react';
import NavHeader from '../commons/header';
import {Box, Article, Section, Headline, Split} from 'grommet';
import { getPostsAction } from '../../actions'
import { connect } from 'react-redux';
import browserHistory from '../../history';

class Posts extends Component {

  componentWillMount () {
    this.props.getPostsAction();
  }

  showOnePost (id) {
    browserHistory.push(`/showPost/${id}`);
  }

  render() {
    return(
      <div>
        <NavHeader/><br/>
        <Box margin='large' responsive={true}>
          {/* <Columns> */}
              <Article scrollStep={false}>
            { this.props.posts && this.props.posts.map(post => {
              return (
                // <Box key={post.id}>
                //   <Card label="Blog post"
                //   heading='Create Blog Post'
                //   description={post.content}
                //   link={<Anchor onClick={() => browserHistory.push('/newPost')}
                //   label='Expand' />} />
                // </Box>
                  <Section 
                    pad='medium'
                    key={post.id}
                    justify='center'
                    separator='bottom'
                    flex='shrink'
                    className='postsHover'
                    // size='medium'
                    onClick={() => this.showOnePost(post.id)}
                    full={false}>
                    <Headline margin='none' size='small' align='center'>
                      {post.title}
                    </Headline><br/>
                    <p>{post.description}</p>
                    <Split separator={false}
                      fixed={false}>
                      <Box
                        justify='start'
                        align='start'
                        pad='medium'>
                        <h4>Comments: {post.comments.length}</h4>
                      </Box>
                      <Box
                        justify='end'
                        align='end'
                        pad='medium'>
                        <h4>By: {post.user.username}</h4>
                      </Box>
                    </Split>
                  </Section>
                )
              })}
              </Article>
          {/* </Columns> */}
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts } = state.posts;
  return { posts };
}

export default connect(mapStateToProps, { getPostsAction }) (Posts);