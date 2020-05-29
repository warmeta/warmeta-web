import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// components
import { Container, Heading, Columns, Level, Button } from 'react-bulma-components';
import { Layout } from '../components';

const PostTemplate = ({ data }) => {
  const { mdx } = data;
  const { body, frontmatter } = mdx;

  return (
    <Layout>
      <Container>
        <Columns>
          <Columns.Column>
            <Level>
              <Level.Side align="left">
                <Level.Item>
                  <Heading>{frontmatter.title}</Heading>
                </Level.Item>
              </Level.Side>
              <Level.Side align="right">
                <Level.Item>
                  <Button>Test button</Button>
                </Level.Item>
              </Level.Side>
            </Level>
            <MDXRenderer>{body}</MDXRenderer>
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({ mdx: PropTypes.object, body: PropTypes.object }).isRequired
};

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
