import React from 'react';
import PropTypes from 'prop-types';

// components
import { Container, Heading, Columns, Level } from 'react-bulma-components';
import { Layout } from '../components';

const PageTemplate = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;
  const { title } = frontmatter;

  return (
    <Layout>
      <Container>
        <Columns>
          <Columns.Column>
            <Level>
              <Level.Side align="left">
                <Level.Item>
                  <Heading>{title}</Heading>
                </Level.Item>
              </Level.Side>
            </Level>
            {children}
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  );
};

PageTemplate.propTypes = {
  pageContext: PropTypes.shape({ frontmatter: PropTypes.shape({ title: PropTypes.string }) })
    .isRequired,
  children: PropTypes.element
};

PageTemplate.defaultProps = {
  children: undefined
};

export default PageTemplate;
