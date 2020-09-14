import React from 'react';
import './profile.css';

export default ({title, name, image, shortBio, links}) => (
  <div className="profile">
    <h2>{title}</h2>
    <div className="profile__list-container">
      {
        image && <img alt={name} src={image} />
      }
      <ul className="profile__list">
        {
          links && links.map(link => (
            <li><a href={link.url} className="email-link">{link.content}</a></li>
          ))
        }
      </ul>
    </div>
    <div dangerouslySetInnerHTML={{ __html: shortBio }} />
  </div>
);
