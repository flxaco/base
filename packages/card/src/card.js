import React from 'react';
import './card.css';

export default ({children, modifier_class, image}) => {
  return (
    <div className={`card ${modifier_class}`}>
      {
        image
          ? <div className="card__image-wrapper">
            <img src={image} className="card__image" />
          </div>
          : ''
      }
      {children}
    </div>
  );
};
