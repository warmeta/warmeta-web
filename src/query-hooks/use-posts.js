import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const usePosts = () => {
  const data = useStaticQuery(
    graphql`
      query Posts {
        allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
          edges {
            node {
              frontmatter {
                title
                path
                date
                excerpt
              }
            }
          }
        }
      }
    `
  );
  return get(data, 'allMdx.edges');
};

export default usePosts;
