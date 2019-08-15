import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Content } from 'react-bulma-components';

const Post = ({ html }) => {
  return <Content dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
};

Post.propTypes = {
  html: PropTypes.string.isRequired
};

export default Post;
