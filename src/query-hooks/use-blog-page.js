import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

// TODO: refactor in template for pages
const useBlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query BlogPage {
        markdownRemark(frontmatter: { path: { eq: "/blog" } }) {
          id
          frontmatter {
            title
            path
            excerpt
            date
          }
        }
      }
    `
  );
  return get(data, 'markdownRemark.frontmatter');
};

export default useBlogPage;
