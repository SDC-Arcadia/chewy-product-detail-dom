/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const PriceComponent = ({ price, seller, shippingOptions }) => (
  <div>
    <div>{price}</div>
    <div>{seller}</div>
    <div>{shippingOptions}</div>
  </div>
);

export default PriceComponent;
