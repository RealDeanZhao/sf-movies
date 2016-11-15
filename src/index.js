import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import finalCreateStore from './redux/createStore';
import App from './App';

const store = finalCreateStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
