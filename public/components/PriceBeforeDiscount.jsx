/* eslint-disable react/prop-types */
import React from 'react';

const PriceBeforeDiscount = ({ priceBefore }) => (
  <li className="our-price">
    <table>
      <tbody>
        <tr>
          <td>
            <p className="title">Was:</p>
          </td>
          <td>
            <p id="before-discount-price">
              <strike>
                {`$${priceBefore}`}
              </strike>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </li>
);

export default PriceBeforeDiscount;
