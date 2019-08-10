import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Level, Box, Media } from 'react-bulma-components';

const Post = ({ title, date, path, excerpt }) => {
  return (
    <Box>
      <Link to={path} style={{ marginBottom: 0 }}>
        <div className="title" style={{ marginBottom: 10 }}>
          {title}
        </div>
      </Link>
      <div className="header" style={{ marginBottom: 10 }}>
        {excerpt}
      </div>
      <Level>
        <Level.Item>
          <Media.Item>
            <div className="heading">{date}</div>
          </Media.Item>
        </Level.Item>
      </Level>
    </Box>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  excerpt: PropTypes.string
};

Post.defaultProps = {
  title: undefined,
  date: undefined,
  path: undefined,
  excerpt: undefined
};

export default Post;
