import React from 'react';

// components
import { Container, Heading, Columns, Level, Button } from 'react-bulma-components';
import { Layout, ListingPosts } from '../components';
// queries
import useSiteMetadata from '../query-hooks/use-site-metadata';

export default function Index() {
  const { title } = useSiteMetadata();
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
              <Level.Side align="right">
                <Level.Item>
                  <Button>Test button</Button>
                </Level.Item>
              </Level.Side>
            </Level>
            <ListingPosts />
          </Columns.Column>
        </Columns>
      </Container>
    </Layout>
  );
}
