import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// components
import { Heading, Section, Columns, Level, Button } from 'react-bulma-components';
import Header from '../components/Header';
import Post from '../components/Post';

// styles
import '../index.css';

export default function Layout({ data }) {
  const { allMarkdownRemark } = data;
  const { edges: posts } = allMarkdownRemark;

  return (
    <>
      <Header />

      <Section>
        <Columns>
          <Columns.Column>
            <Level>
              <Level.Side align="left">
                <Level.Item>
                  <Heading>Test Heading</Heading>
                </Level.Item>
              </Level.Side>
              <Level.Side align="right">
                <Level.Item>
                  <Button>Test button</Button>
                </Level.Item>
              </Level.Side>
            </Level>

            <Columns>
              {posts.map(post => {
                return (
                  <Columns.Column key={post.node.frontmatter.path}>
                    <Post {...post.node.frontmatter} />
                  </Columns.Column>
                );
              })}
            </Columns>
          </Columns.Column>
        </Columns>
      </Section>
    </>
  );
}

Layout.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({ edges: PropTypes.object }).isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query Posts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
            excerpt
          }
        }
      }
    }
  }
`;
