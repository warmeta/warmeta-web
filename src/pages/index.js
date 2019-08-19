import React from 'react';

// components
import { Container, Heading } from 'react-bulma-components';
import { Layout } from '../components';
// queries
import useSiteMetadata from '../query-hooks/use-site-metadata';

export default function Index() {
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <Container>
        <Heading>{title}</Heading>
      </Container>
    </Layout>
  );
}
