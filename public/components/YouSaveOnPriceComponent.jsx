/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const YouSaveOnPriceComponent = ({ discountedAmount, discountPercentage }) => (
  // <div id="product-vitals" className="product-vitals">
  //   <div id="pricing">
  // <ul>
  <li className="our-price">
    <table>
      <tbody>
        <tr>
          <td>
            <p className="title">You Save:</p>
          </td>
          <td>
            {`
                `}
          </td>
          <td>
            <p id="save-with-price">
              {`$${discountedAmount.toFixed(2)} (${discountPercentage}%)`}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </li>

);

export default YouSaveOnPriceComponent;
