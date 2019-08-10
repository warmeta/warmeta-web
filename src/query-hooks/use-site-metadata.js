import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const useSiteMetadata = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return get(data, 'site.siteMetadata');
};

export default useSiteMetadata;
