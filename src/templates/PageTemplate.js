import React from 'react';
import PropTypes from 'prop-types';

// components
import { Container, Heading, Columns, Level } from 'react-bulma-components';
import { Layout, HtmlContent } from '../components';

const PageTemplate = ({ data, children }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;

  return (
    <Layout>
      <Container>
        <Columns>
          <Columns.Column>
            <Level>
              <Level.Side align="left">
                <Level.Item>
                  <Heading>{frontmatter.title}</Heading>
                </Level.Item>
              </Level.Side>
            </Level>
            <HtmlContent html={html} />
            {children}
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({ markdownRemark: PropTypes.object, html: PropTypes.object }).isRequired,
  children: PropTypes.element
};

PageTemplate.defaultProps = {
  children: undefined
};

export default PageTemplate;
