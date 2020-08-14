/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React from 'react';

import ReactDOM from 'react-dom';

// const App = () => (
//   <div>
//     Here is an App
//   </div>
// );
class ProductDetail extends React.Component {
  // constructor() {
  //   super(),
  //   this.state = {
  //     productId: 'P001',
  //   };
  // }
  // getDataForProductId() {
  //   // @this.ajax()
  // }
  render() {
    return (<div>Here is an another App</div>);
  }
}

ReactDOM.render(<ProductDetail />, document.getElementById('app'));
