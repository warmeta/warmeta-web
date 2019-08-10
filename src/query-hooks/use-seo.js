import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const useSEO = () => {
  const data = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  );
  return get(data, 'site.siteMetadata');
};

export default useSEO;
