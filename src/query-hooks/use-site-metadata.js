import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            url
            image
            twitterUsername
          }
        }
      }
    `
  );
  return get(data, 'site.siteMetadata');
};

export default useSiteMetadata;
