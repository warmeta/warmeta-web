import { useStaticQuery, graphql } from 'gatsby';

// TODO: refactor in template for pages
const useAboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query AboutPage {
        mdx(frontmatter: { path: { eq: "/about" } }) {
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

export default useAboutPage;
