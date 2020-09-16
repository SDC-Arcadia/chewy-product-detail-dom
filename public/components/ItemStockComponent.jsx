/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const ItemStockComponent = ({ sizeHandler, itemsStock, currentSize }) => (
  <div id="stock">
    {itemsStock > 0 ? <div id="in-stock">In stock</div> : <div className="out-of-stock">Out of stock</div> }
    <div className="current-size">
      Size:
      <span className="size-option">{`  ${currentSize}`}</span>
    </div>
    <button onClick={sizeHandler} type="button" id="0">small</button>
    <button onClick={sizeHandler} type="button" id="1">medium</button>
    <button onClick={sizeHandler} type="button" id="2">large</button>
  </div>
);

export default ItemStockComponent;
