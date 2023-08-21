import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductBookingCard from './ProductBookingCard';
import axios from 'axios';
import { useState } from 'react';
const Product = () => {
  const navigate = useNavigate();
  const products = [
    {
      name: 'HAUL',
      image: "https://ecoautomotive.evive-micromobility.com/web/image/product.template/183/image_1024/HAUL?unique=8632a68",
      description: 'From disk brake to a fully functional mobile application, this affordable eVive offering delivers a smooth ride every single time.',
      price: '49,999.00',
    },
    {
      name: 'BUZZ',
      image: "https://ecoautomotive.evive-micromobility.com/web/image/product.template/204/image_1024/BUZZ?unique=32ee543",
      description: 'From disk brake to a fully functional mobile application, this affordable eVive offering delivers a smooth ride every single time.',
      price: '39,999.00',
    },
    {
        name: 'TRAC',
        image: "https://ecoautomotive.evive-micromobility.com/web/image/product.template/203/image_1024/TRAC?unique=6eefcae",
        description: 'From disk brake to a fully functional mobile application, this affordable eVive offering delivers a smooth ride every single time.',
        price: '39,999.00',
    },
    {
      name: 'DYNA',
      image: "https://ecoautomotive.evive-micromobility.com/web/image/product.template/199/image_1024/DYNA?unique=415bf4f",
      description: 'From disk brake to a fully functional mobile application, this affordable eVive offering delivers a smooth ride every single time.',
      price: '38,999.00',
  },
    {
        name: 'AXIO',
        image: "https://ecoautomotive.evive-micromobility.com/web/image/product.template/202/image_1024/AXIO?unique=3b91fed",
        description: 'From disk brake to a fully functional mobile application, this affordable eVive offering delivers a smooth ride every single time.',
        price: '34,999.00',
    },
    {
        name: 'OPTO',
        image: "https://ecoautomotive.evive-micromobility.com/web/image/product.template/186/image_1024/OPTO?unique=f72415d",
        description: 'From disk brake to a fully functional mobile application, this affordable eVive offering delivers a smooth ride every single time.',
        price: '29,923.96',
    },
  ];
  const handleBookNowClick = async (product) => {
    try {
      product.price = parseFloat(product.price.replace(',', ''));
      const response = await fetch('http://127.0.0.1:8000/api/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product), // Send the selected product as JSON data
      });

      if (response.ok) {
        console.log('Product details sent and stored successfully.');
        navigate('/Address', {state:{product}})
      } else {
        console.error('Error sending product details:', response.status);
      }
    } catch (error) {
      console.error('Error sending product details:', error);
    }
  };
  const handleAddToCart = async (product) => {
    

    const user_id = sessionStorage.getItem('user_id');
    console.log(sessionStorage.getItem('user_id'))
    console.log('user_id is', user_id)
    const productData = {
        user_id: parseInt(user_id),
        name: product.name,
        image: product.image,
        price: parseFloat(product.price.replace(',', '')),
        
    }
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cart-create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData), // Send the product ID
      });

      if (response.ok) {
        console.log('Product added to cart successfully.');
      } else {
        console.error('Error adding product to cart:', response.status);
        
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
    

  

  return (
    <div>
      {products.map((product, index) => (
        <ProductBookingCard key={index} product={product}
        onBookNowClick={() => handleBookNowClick(product)}
        onAddToCartClick={() => handleAddToCart(product)} />
      ))}
    </div>
  );
      };

export default Product;
