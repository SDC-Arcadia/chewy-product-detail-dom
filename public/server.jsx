import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ProductDetail from './components/ProductDetail.jsx';

export default (product) => ReactDOMServer.renderToString(
  <ProductDetail
    product={product}
  />,
);
