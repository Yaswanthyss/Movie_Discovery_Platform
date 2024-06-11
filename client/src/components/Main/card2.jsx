import React from 'react';
import PropTypes from 'prop-types';
import './homestyle.css';

function Card2({ imageUrl, title, description, onClick }) {
  return (
    <div className='cardbox2'>
      <div className="image-container2" onClick={onClick}>
        <img src={imageUrl} alt={title} className="card-image2" />
        <div className="card-content2">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

Card2.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card2;
