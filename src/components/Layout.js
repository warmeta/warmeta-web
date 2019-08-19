import React from 'react';
import PropTypes from 'prop-types';

// components
import { Section } from 'react-bulma-components';
import Header from './Header';
import Seo from './Seo';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <Section>{children}</Section>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
