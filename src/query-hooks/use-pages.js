import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const usePages = () => {
  const data = useStaticQuery(
    graphql`
      query Pages {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/pages/" } }
          sort: { order: ASC, fields: frontmatter___title }
        ) {
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

export default usePages;
