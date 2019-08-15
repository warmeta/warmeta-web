import React from 'react';
import PropTypes from 'prop-types';

// components
import { Section } from 'react-bulma-components';
import { Header, Seo as SEO } from './index';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <Section>{children}</Section>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
