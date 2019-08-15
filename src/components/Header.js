import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// components
import { Hero, Heading, Navbar, Container, Level } from 'react-bulma-components';
// queries
import useSiteMetadata from '../query-hooks/use-site-metadata';

const Header = () => {
  const { linkedinUrl, githubUrl } = useSiteMetadata();
  return (
    <Hero color="primary">
      <Container>
        <Heading>
          <Navbar>
            <Navbar.Brand style={{ height: 'auto', padding: '7px' }}>
              <Level>
                <Level.Item>
                  <img src="logo-w.png" alt="logo" style={{ maxHeight: '3rem' }} />
                </Level.Item>
              </Level>
            </Navbar.Brand>
            <Navbar.Menu>
              <Navbar.Container>
                <Navbar.Item href="#" className="is-size-5">
                  About
                </Navbar.Item>
                <Navbar.Item href="#" className="is-size-5">
                  Blog
                </Navbar.Item>
              </Navbar.Container>
              <Navbar.Container position="end">
                <Navbar.Item href={linkedinUrl} target="_blank">
                  <Level>
                    <Level.Item>
                      <FaLinkedin />
                    </Level.Item>
                  </Level>
                </Navbar.Item>
                <Navbar.Item href={githubUrl} target="_blank">
                  <Level>
                    <Level.Item>
                      <FaGithub />
                    </Level.Item>
                  </Level>
                </Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
        </Heading>
      </Container>
    </Hero>
  );
};

export default Header;
