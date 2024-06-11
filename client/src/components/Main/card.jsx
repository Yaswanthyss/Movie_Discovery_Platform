// Card.js
import React from 'react';
import PropTypes from 'prop-types';
import './homestyle.css';

function Card({ imageUrl, title, description, youtubeUrl,onClick }) {
  return (
    <div className='cardbox'>
    <div className="image-container" onClick={onClick}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  youtubeUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
