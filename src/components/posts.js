import React, { Component } from 'react';
import NavHeader from './commons/header';
import Box from 'grommet/components/Box';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Split from 'grommet/components/Split';
import { getPostsAction } from '../actions'
import { connect } from 'react-redux';

class Posts extends Component {

  componentWillMount () {
    console.log("compwil")
    this.props.getPostsAction();
  }

  render() {
    return(
      <div>
        <NavHeader/><br/>
        <Box margin='large' responsive={true}>
          {/* <Columns> */}
              <Article scrollStep={false}>
            { this.props.posts.map(post => {
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
                    // size='medium'
                    full={false}>
                    <Headline margin='none' size='small' align='center'>
                      {post.title}
                    </Headline><br/>
                    <p>{post.content}</p>
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
// export default Posts;