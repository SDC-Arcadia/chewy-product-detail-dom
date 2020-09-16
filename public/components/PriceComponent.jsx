/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/extensions */
import React from 'react';
import PriceBeforeDiscount from './PriceBeforeDiscount.jsx';

const PriceComponent = ({ price, discount, shippingOptions }) => {
  const parsed = parseInt(price).toFixed(2);
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
                      {discount === 0 ? parsed : (parsed - (parsed / 100 * discount)).toFixed(2)}
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
          <hr />
        </ul>
      </div>
      <div id="shipping-options">
        {shippingOptions}
      </div>
    </div>
  );
};

export default PriceComponent;
