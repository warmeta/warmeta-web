import React from 'react';

// components
import { Container, Heading, Image, Section, Columns, Level } from 'react-bulma-components';
import { Layout } from '../components';
// queries
import useSiteMetadata from '../query-hooks/use-site-metadata';

import mainImg from '../../static/main.jpg';
import stackImg from '../../static/stack.png';

export default function Index() {
  const { title } = useSiteMetadata();

  return (
    <Layout fullWidth>
      <Section>
        <Container>
          <Columns>
            <Columns.Column size="half">
              <Image src={mainImg} />
            </Columns.Column>
            <Columns.Column>
              <Columns>
                <Columns.Column size="12" style={{ marginBottom: '2rem' }}>
                  <Heading style={{ textTransform: 'none' }}>Hi! My name is Jose,</Heading>
                  <br />
                  <Heading subtitle style={{ textTransform: 'none' }}>
                    Im a web developer based in Gran Canaria, Spain.
                  </Heading>
                  <Heading subtitle style={{ textTransform: 'none' }}>
                    Actually my main stack is Postgres, Express, React and Node.
                  </Heading>
                </Columns.Column>
                <Columns.Column>
                  <Level>
                    <Level.Item>
                      <Image src={stackImg} style={{ maxWidth: 300 }} />
                    </Level.Item>
                  </Level>
                </Columns.Column>
              </Columns>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
}
