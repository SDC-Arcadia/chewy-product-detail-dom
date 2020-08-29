/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const ProductHeaderComponent = ({
  name, brand, seller, count,
}) => (
  <>
    <div>{brand}</div>
    <div>{name}</div>
    <div>{seller}</div>
    <div>
      reviews:
      {count}
    </div>
  </>
);

export default ProductHeaderComponent;
