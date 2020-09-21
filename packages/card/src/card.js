import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({
  children, modifierClass, image, ...props
}) => (
  <div className={`card ${modifierClass}`} {...props} data-testid="card-test">
    {
      image
        ? (
          <div className="card__image-wrapper">
            <img src={image} alt="" className="card__image" />
          </div>
        )
        : ''
    }
    {children}
  </div>
);

Card.propTypes = {
  /**
   * Inner content
   */
  children: PropTypes.node,
  /**
   * Additional classes
   */
  modifierClass: PropTypes.string,
  /**
   * Image src
   */
  image: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  modifierClass: '',
  image: '',
};

export default Card;
