/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const AddToCardComponent = ({ stock }) => {
  const options = [];
  for (let i = 1; i <= stock; i += 1) {
    options.push(<option value={i}>{i}</option>);
  }
  return (
    <div id="add-to-cart-box">
      <div id="border-box">
        <div className="quantity-select">
          <div className="">
            <label htmlFor="quantity" className="quantity">Quantity</label>
            <select name="quantity" id="quantity" className="js-quantity-dropdown">
              {options}
            </select>
          </div>
        </div>

        <div className="buttons">
          <input type="submit" className="cw-btn" value="Add to Cart" />
        </div>
      </div>

      <hr className="hr3" />
      <a id="add-to-fav">
        <table>
          <tr>
            <td id="td3">
              <img id="heart" src="https://fec-kwame-picture-service.s3.amazonaws.com/stars/heart.png" />
            </td>
            <td id="td2">
              <span id="span-text">
                Add to Favorites
              </span>
            </td>
          </tr>
        </table>
      </a>
    </div>
  );
};

export default AddToCardComponent;
