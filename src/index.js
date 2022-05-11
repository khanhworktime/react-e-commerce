import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ProductDetail from './routes/ProductDetail/ProductDetail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import productApi from './api/productApi';

//Create cart
const cart = {
  products: [],
  totalItems: () => cart.products.length,
  total: () => cart.products.reduce((total, product) => Math.round((total + product.price * product.amount) * 100) / 100, 0),
  isEmpty: () => (cart.totalItems() === 0),
  removeItem: (id) => cart.products = cart.products.filter((product) => {
    if (product.id === id)
      if (product.amount === 1) return false;
      else { product.amount -= 1; return true; }
    else return true;
  }),
  addItem: (id) => cart.products.find((product) => {
    const cond = (product.id === id)
    if (cond) product.amount += 1;
    return cond;
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App cart={cart} />} />
      <Route path="/productDetail:productID" element={<ProductDetail cart={cart} />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
