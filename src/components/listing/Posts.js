import React from 'react';

// components
import { Columns } from 'react-bulma-components';
import Post from '../Post';

import usePosts from '../../query-hooks/use-posts';

const Posts = () => {
  const posts = usePosts();

  return (
    <Columns>
      {posts.map(post => {
        return (
          <Columns.Column key={post.node.frontmatter.path}>
            <Post {...post.node.frontmatter} />
          </Columns.Column>
        );
      })}
    </Columns>
  );
};

export default Posts;
