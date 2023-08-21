import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Styles/ProductBookingCard.css'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductBookingCard = ({ product, onBookNowClick, onAddToCartClick}) => {
  const { name, image, description, price } = product;
  
  

  return (
    <div className="product-booking-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2 style={{color:'orange'}}>{product.name}
        {product.name.color}
        </h2>
        <p>{product.description}</p>
        <b><p> Price: Rs {product.price}</p></b>
      </div>
      <button onClick={onBookNowClick} className='book-button'>Book now</button>
      <div>
        <button onClick={onAddToCartClick} className='book-button1'><FontAwesomeIcon icon={faShoppingCart}/></button>
      </div>
    </div>
  );
};

export default ProductBookingCard;
