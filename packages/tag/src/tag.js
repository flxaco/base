import React from 'react';
import PropTypes from 'prop-types';
import './tag.css';

const Tag = ({ title, tags }) => (
  <div className="tags">
    <h3 className="tags__title">
      {' '}
      {title}
    </h3>
    <ul>
      {
        tags && tags.map(tag => (
          <li className="tag" key={tag}>
            {tag}
          </li>
        ))
      }
    </ul>
  </div>
);

Tag.propTypes = {
  title: PropTypes.oneOf(['Skills', 'Tools']).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tag;
