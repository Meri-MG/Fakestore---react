import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>hi</div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
