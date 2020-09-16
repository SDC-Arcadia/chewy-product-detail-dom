/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
import React from 'react';
import PriceBeforeDiscount from './PriceBeforeDiscount.jsx';
import YouSaveOnPriceComponent from './YouSaveOnPriceComponent.jsx';
import AutoshipComponent from './AutoshipComponent.jsx';
import ItemStockComponent from './ItemStockComponent.jsx';

const PriceComponent = ({
  price, discount, changeSize, stock, size,
}) => {
  const parsed = parseInt(price).toFixed(2);
  const discounted = parsed / 100 * discount;
  return (
    <div id="product-vitals" className="product-vitals">
      <div id="pricing">
        <ul>
          {discount === 0 ? '' : <PriceBeforeDiscount priceBefore={parsed} />}
          <li className="our-price">
            <table>
              <tbody>
                <tr>
                  <td>
                    <p className="title">
                      {'                    Price:'}
                    </p>
                  </td>
                  <td>
                    <li className="price">
                      {discount === 0 ? `$${parsed}` : `$${(parsed - discounted).toFixed(2)}`}
                    </li>
                  </td>
                  <td>
                    <li className="free-shipping">
                      FREE 1-3 DAY
                      <div>
                        SHIPPING OVER $49
                      </div>
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
          {discount === 0 ? '' : <YouSaveOnPriceComponent discountedAmount={discounted} discountPercentage={discount} />}
          <hr className="hr1" />
          {discount === 0 ? <AutoshipComponent fullPrice={price} /> : <AutoshipComponent fullPrice={price - discounted} />}
          <hr className="hr2" />
        </ul>
      </div>
      <div id="shipping-options">
        <ItemStockComponent sizeHandler={changeSize} itemsStock={stock} currentSize={size} />
      </div>
    </div>
  );
};

export default PriceComponent;
