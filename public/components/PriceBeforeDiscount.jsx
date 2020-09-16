/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const PriceBeforeDiscount = ({ priceBefore }) => (
  // <div id="product-vitals" className="product-vitals">
  //   <div id="pricing">
  // <ul>
  <li className="our-price">
    <table>
      <tbody>
        <tr>
          <td>
            <p className="title">
              {'                    Was:'}
            </p>
          </td>
          <td>
            {`
                `}
          </td>
          <td>
            <p id="before-discount-price">
              <strike>
                {`                        $${priceBefore}`}
              </strike>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </li>

);

export default PriceBeforeDiscount;
