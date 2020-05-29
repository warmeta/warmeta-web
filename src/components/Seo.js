import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import useSiteMetadata from '../query-hooks/use-site-metadata';

export default function SEO({ title, description, image, pathname, article }) {
  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    url,
    image: defaultImage,
    twitterUsername
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}${pathname || '/'}`
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
};
