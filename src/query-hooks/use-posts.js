import { graphql } from 'gatsby';

const usePosts = () => {
  return graphql`
    query Posts {
      allMarkdownRemark {
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
};

export default usePosts;
