/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const ItemStockComponent = ({ changeSize }) => (
  <div>
    <button onClick={changeSize} type="button" id="0">small</button>
    <button onClick={changeSize} type="button" id="1">medium</button>
    <button onClick={changeSize} type="button" id="2">large</button>
  </div>
);

export default ItemStockComponent;
