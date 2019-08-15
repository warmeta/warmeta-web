import React from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import { Content } from 'react-bulma-components';

const Post = ({ html }) => {
  return <Content dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }} />;
};

Post.propTypes = {
  html: PropTypes.string.isRequired
};

export default Post;
