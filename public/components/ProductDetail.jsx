/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import PriceComponent from './PriceComponent.jsx';
import ProductHeader from './ProductHeaderlInfo.jsx';
import ItemStockComponent from './ItemStockComponent.jsx';

class ProductDetail extends React.Component {
  constructor() {
    // eslint-disable-next-line no-unused-expressions
    super();
    this.state = {
      itemBrand: '',
      itemSeller: '',
      itemName: '',
      itemSizes: [],
      currentSize: '0',
    };
    this.getProductFullData = this.getProductFullData.bind(this);
  }

  getProductFullData(productId) {
    axios.get(`http://localhost:3001/productFullData/${productId}`)
      .then((result) => {
        console.log('----------', result);
        const {
          brand,
          seller,
          name,
          size_options,
        } = result;

        this.setState({
          itemBrand: brand,
          itemSeller: seller,
          itemName: name,
          itemSizes: size_options,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('product-detail');
    this.getProductFullData(id);
  }

  render() {
    const { itemSizes } = this.state;
    return (
      <div>
        {
        itemSizes.length
          ? (
            <div>
              <ProductHeader
                name={this.state.itemName}
                seller={this.state.itemSeller}
                brand={this.state.itemBrand}
              />
              <PriceComponent
                price={itemSizes[this.state.currentSize].price}
                discount={itemSizes[this.state.currentSize].discount}
                shippingOptions={itemSizes[this.state.currentSize].shipping_options}
              />
              <ItemStockComponent />
            </div>
          )
          : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default ProductDetail;