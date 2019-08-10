import React from 'react';

// components
import { Heading, Columns, Level, Button } from 'react-bulma-components';
import Layout from '../components/Layout';
import ListingPosts from '../components/Listing/Posts';

export default function Index() {
  return (
    <Layout>
      <Columns>
        <Columns.Column>
          <Level>
            <Level.Side align="left">
              <Level.Item>
                <Heading>Test Heading</Heading>
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
    </Layout>
  );
}
