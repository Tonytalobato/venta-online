import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/user-context';
import { CartProvider } from './contexts/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </UserProvider>
    </BrowserRouter>   
  </React.StrictMode>
);

reportWebVitals();
