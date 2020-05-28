import React from 'react';
import PropTypes from 'prop-types';

// components
import { Section } from 'react-bulma-components';
import Seo from './Seo';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, fullWidth }) {
  return (
    <>
      <Seo />
      <Header />
      <main>{fullWidth ? children : <Section>{children}</Section>}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  fullWidth: PropTypes.bool
};

Layout.defaultProps = {
  fullWidth: false
};
