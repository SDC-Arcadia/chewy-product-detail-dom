/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import React from 'react';

import ReactDOM from 'react-dom';

// const App = () => (
//   <div>
//     Here is an App
//   </div>
// );
class App extends React.Component {
  render() {
    return (<div>Here is an another App</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
