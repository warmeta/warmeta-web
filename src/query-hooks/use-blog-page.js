import { useStaticQuery, graphql } from 'gatsby';

// TODO: refactor in template for pages
const useBlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query BlogPage {
        mdx(frontmatter: { path: { eq: "/blog" } }) {
          body
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
  return data;
};

export default useBlogPage;
