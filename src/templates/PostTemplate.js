import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const PostTemplate = ({ data }) => {
  const { markdownRemark, html } = data;
  return <div>{markdownRemark.frontmatter.title}</div>;
};

PostTemplate.propTypes = {
  data: PropTypes.shape({ markdownRemark: PropTypes.object, html: PropTypes.object }).isRequired
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
