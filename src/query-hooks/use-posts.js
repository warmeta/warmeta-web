import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const usePosts = () => {
  const data = useStaticQuery(
    graphql`
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
    `
  );
  return get(data, 'allMarkdownRemark.edges');
};

export default usePosts;
