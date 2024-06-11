// MyList.js
import React from 'react';
import PropTypes from 'prop-types';
import './homestyle.css';
import home from "./home.png";
import smile from "./laughing.png";
import hot from "./hot-sale.png";
import down from "./downloading.png";
import { Link } from 'react-router-dom';

function MyList({ items }) {
  return (
    <>
    <div className="mylist">
      <h2>My Favourites</h2>
      <div className="mylist-content">
        {items.map((item, index) => (
          <div key={index} className="mylist-item">
            <img src={item.imageUrl} alt={item.title} className="mylist-image" />
            <div className="mylist-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className='ott'>
              <h4><small>Available on:</small> <br></br>{item.Ott}</h4>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="floating">
        <ul>
          <li>
            <img src={home} alt="" />
            <Link to='/'><h3>Home Page</h3></Link>
          </li>
          <li>
            <img src={hot} alt="" />
            <h3>New & Hot</h3>
          </li>
          <li>
            <img src={smile} alt="" />
            <h3>Fast Laughs</h3>
          </li>
          <li>
            <img src={down} alt="" />
            <h3>Downloads</h3>
          </li>
        </ul>
      </div>
    </>

  );
}

MyList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Ott: PropTypes.string.isRequired,
    })
  ),
};

export default MyList;
