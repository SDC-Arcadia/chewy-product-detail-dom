/* eslint-disable no-console */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React from 'react';

import ReactDOM from 'react-dom';

class ProductDetail extends React.Component {
  constructor() {
    // eslint-disable-next-line no-unused-expressions
    super();
    this.state = {
      productId: 'P003',
      productFullData: '',
    };
  }

  getProductFullData() {
    const { id } = this.state;
    fetch(`http://localhost:3001/productFullData/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        this.setState({
          productFullData: result,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  componentDidMount() {
    this.getProductFullData();
  }

  render() {
    console.log('----', this.state);
    return (<div>Here i am</div>);
  }
}

ReactDOM.render(<ProductDetail />, document.getElementById('app'));
