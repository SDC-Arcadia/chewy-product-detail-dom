import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import ProductDetail from './components/ProductDetail.jsx';

// eslint-disable-next-line no-multi-spaces
// eslint-disable-next-line no-undef
ReactDOM.hydrate(<ProductDetail product={window.__product__} />, document.getElementById('product_detail'));
