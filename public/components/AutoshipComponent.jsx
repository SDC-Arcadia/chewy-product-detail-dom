/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const AutoshipComponent = ({ fullPrice }) => {
  const discounted = (fullPrice - (fullPrice / 100 * 5)).toFixed(2);
  return (
    <li className="our-price">
      <table>
        <tbody>
          <tr>
            <td id="table-auto1">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <picture type="image/png">
                        <img id="icon" src="https://fec-kwame-picture-service.s3.amazonaws.com/stars/icon.png" />
                      </picture>
                    </td>
                    <td id="autoship">
                      <span id="autoship-span1">
                        <div>Autoship:</div>
                      </span>
                      <span id="autoship-span2">
                        <div>$Save</div>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td id="table-auto2">
              <p className="price">
                {`$${discounted} `}
                <span id="save-with-price1">
                  (Save an extra 5%)
                </span>
              </p>
              <p id="tdp1">Simply select Autoship at checkout</p>
              <span id="tdp1">for easy regular deliveries.</span>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default AutoshipComponent;
