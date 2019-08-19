import { useStaticQuery, graphql } from 'gatsby';

// TODO: refactor in template for pages
const useAboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query AboutPage {
        markdownRemark(frontmatter: { path: { eq: "/about" } }) {
          html
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
