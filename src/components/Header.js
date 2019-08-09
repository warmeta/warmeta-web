import React from 'react';
import { Hero, Heading, Navbar } from 'react-bulma-components';
import useSiteMetadata from '../hooks/use-site-metadata';

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <Hero color="primary">
      <Heading>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img
                src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original"
                alt="logo"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Navbar.Item>
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item href="#">{title}</Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item href="#">At the end</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </Heading>
    </Hero>
  );
};

export default Header;
