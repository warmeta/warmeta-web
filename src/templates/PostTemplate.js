import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// components
import { Container, Heading, Columns, Level, Button } from 'react-bulma-components';
import { Layout, HtmlContent } from '../components';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;

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
            <HtmlContent html={html} />
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  );
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
