import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CartProvider } from './context/cart.context';

import App from './App';
import { store } from './store/store';
import './index.scss';

const rootElement = document.getElementById('root');

// render(what,  where)
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
