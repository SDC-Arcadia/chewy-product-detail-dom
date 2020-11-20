/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
// import axios from 'axios';
import '../styles.scss';
import PriceComponent from './PriceComponent.jsx';
import ProductHeader from './ProductHeaderlInfo.jsx';
import AddToCardComponent from './AddToCardComponent.jsx';

// const SERVER_URL = 'http://localhost:3001';

// const SERVER_URL = 'http://sdc-api.dominicsilvia.com';

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

    // this.getProductFullData = this.getProductFullData.bind(this);
    this.handleDifferentSizeOptions = this.handleDifferentSizeOptions.bind(this);
  }

  handleDifferentSizeOptions(event) {
    event.preventDefault();
    this.setState({
      currentSize: event.target.id,
    });
  }

  // getProductFullData(productId) {
  //   console.log('about to fetch data');
  //   axios.get(`${SERVER_URL}/productFullData/${productId}`)
  //     .then((result) => {
  //       console.log('\\\\\\\\\\\\\\', result.data);
  //       const sizes = result.data.size_options.map((option) => option.size);
  //       const {
  //         brand,
  //         seller,
  //         name,
  //         size_options,
  //         review_count,
  //         average_stars,
  //       } = result.data;

  //       this.setState({
  //         itemBrand: brand,
  //         itemSeller: seller,
  //         itemName: name,
  //         itemSizes: size_options,
  //         count: review_count,
  //         average_stars,
  //         sizes,
  //         sizeButton: result.data.size_options[0].size,

  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

  //    componentDidMount() {
  //   //  const productId = this.props.productId || new URLSearchParams(window.location.search).get('productId');
  //       const urlParams = new URLSearchParams(window.location.search);
  //       const id = urlParams.get('productId');
  //       console.log('PROPS', this.propProductId);
  //       console.log('productId-ssr', id);
  //       this.getProductFullData(id === null ? '1' : id);
  //     this.getProductFullData(productId);
  //  }

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
