import React from 'react';
import { FaHeart } from 'react-icons/fa';

// components
import { Footer as BFooter, Content, Level } from 'react-bulma-components';

const Footer = () => {
  return (
    <BFooter renderAs="footer" color="secondary" className="has-background-primary">
      <Content className="has-text-right">
        <Level>
          <Level.Side align="left" />
          <Level.Side align="right">
            <Level.Item>
              <strong>Made with Gatsby and Bulma</strong>
            </Level.Item>
            <Level.Item>
              <FaHeart style={{ marginLeft: 10 }} />
            </Level.Item>
          </Level.Side>
        </Level>
      </Content>
    </BFooter>
  );
};

export default Footer;
