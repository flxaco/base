import React from 'react';
import PropTypes from 'prop-types';
import './profile.css';

const Profile = ({
  title, name, image, shortBio, links,
}) => (
  <div className="profile">
    <h2>{title}</h2>
    <div className="profile__list-container">
      {
        image && <img alt={name} src={image} />
      }
      <ul className="profile__list">
        {
          links && links.map((link, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`link-${index}`}><a href={link.url} className="email-link">{link.content}</a></li>
          ))
        }
      </ul>
    </div>
    <div dangerouslySetInnerHTML={{ __html: shortBio }} />
  </div>
);

Profile.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  shortBio: PropTypes.node,
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    content: PropTypes.string,
  })),
};

Profile.defaultProps = {
  title: 'Front End Developer',
  name: 'Nick Fletcher',
  image: null,
  shortBio: <p>Test short bio...</p>,
  links: [
    {
      url: 'https://www.google.com',
      content: 'Google.com',
    },
  ],
};

export default Profile;
