import React from 'react';
import PropTypes from 'prop-types';

// components
import { Section } from 'react-bulma-components';
import Header from './Header';
import Seo from './Seo';

export default function Layout({ children, fullWidth }) {
  return (
    <>
      <Seo />
      <Header />
      {fullWidth ? children : <Section>{children}</Section>}
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
