import React from 'react';
import '../css/Product.css';

const Product = () => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The learn startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>&starf</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
