/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const ProductHeaderComponent = ({
  name, brand, count, averageStars, answersCount,
}) => {
  const startSvgFilePath = `https://fec-kwame-picture-service.s3.amazonaws.com/stars/rating-${averageStars}.svg`;
  return (
    <header>
      <div className="product-title">
        <h5>
          {`${brand} ${name}`}
        </h5>
        <div id="product-header-extras">
          <a href="">
            {'                            By '}
            <span itemProp="brand">
              {brand}
            </span>
          </a>
        </div>
      </div>
      <div className="product-header-extras">
        <div className="ugc-head">
          <picture type="image/svg+xml">
            <img id="stars" src={startSvgFilePath} />
          </picture>
          <a href="">
            <span>
              {count}
              {' Reviews  '}
            </span>
          </a>
          {' | '}
          <a href="">
            {answersCount}
            {' Answered Questions'}
          </a>
        </div>
      </div>
    </header>
  );
};

export default ProductHeaderComponent;
