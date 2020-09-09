/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const ProductHeaderComponent = ({
  name, brand, seller, count,
}) => (
  <header>
    <div id="product-title">
      <h1>
        {brand}
        {name}
      </h1>
      <div id="product-subtitle">
        <a href="">
          {'By   '}
          <span itemProp="brand">
            {seller}
          </span>
        </a>
      </div>
    </div>
    <div className="product-header-extras">
      <div className="ugc-head">
        <a href="">
          <span>
            {count}
            {' Reviews'}
          </span>
        </a>
      </div>
      reviews:
      {count}
    </div>
  </header>
);

export default ProductHeaderComponent;
