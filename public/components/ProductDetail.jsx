/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import '../styles.scss';
import PriceComponent from './PriceComponent.jsx';
import ProductHeader from './ProductHeaderlInfo.jsx';
import AddToCardComponent from './AddToCardComponent.jsx';

class ProductDetail extends React.Component {
  constructor(props) {
    // eslint-disable-next-line no-unused-expressions
    super(props);
    const {
      name,
      brand,
      seller,
      review_count,
      average_stars,
      size_options,
    } = props.product;

    const sizes = size_options.map((option) => option.size);

    this.state = {
      itemBrand: brand || '',
      itemSeller: seller || '',
      itemName: name || '',
      itemSizes: size_options || [],
      currentSize: '0',
      average_stars: average_stars || '0',
      QA: '17',
      count: review_count || 0,
      sizes: sizes || [],
      sizeButton: size_options[0].size || 0,
    };

    this.handleDifferentSizeOptions = this.handleDifferentSizeOptions.bind(this);
  }

  handleDifferentSizeOptions(event) {
    event.preventDefault();
    this.setState({
      currentSize: event.target.id,
    });
  }

  render() {
    const { itemSizes } = this.state;
    return (
      <div id="main">
        <section id="right-column">
          <div id="zoom-container" />
          <ProductHeader
            name={this.state.itemName}
            seller={this.state.itemSeller}
            brand={this.state.itemBrand}
            count={this.state.count}
            averageStars={this.state.average_stars}
            answersCount={this.state.QA}
          />
          <table>
            <tbody>
              <tr>
                <td>
                  <PriceComponent
                    price={itemSizes[this.state.currentSize].price}
                    discount={itemSizes[this.state.currentSize].discount}
                    stock={itemSizes[this.state.currentSize].item_stock}
                    csize={itemSizes[this.state.currentSize].size}
                    changeSize={this.handleDifferentSizeOptions}
                    options={this.state.sizes}
                    buttonOption={this.state.sizeButton}
                  />
                </td>
                <td id="td1">
                  <AddToCardComponent stock={itemSizes[this.state.currentSize].item_stock} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
