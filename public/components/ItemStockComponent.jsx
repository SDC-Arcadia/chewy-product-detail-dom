/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const ItemStockComponent = ({
  sizeHandler, itemsStock, currentSize, opts,
}) => (
  <div id="stock">
    {itemsStock > 0 ? <div id="in-stock">In stock</div> : <div className="out-of-stock">Out of stock</div> }
    <div className="current-size">
      Size:
      <span className="size-option">{`  ${currentSize}`}</span>
    </div>
    <div className="stock-container">
      { opts.map((option, index) => <button key={index} className="button" onClick={sizeHandler} type="button" id={index}>{option}</button>) }
    </div>
    <a hfer="" id="stock">Compare Similar Items </a>
  </div>
);

export default ItemStockComponent;
