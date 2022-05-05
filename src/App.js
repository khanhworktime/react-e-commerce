
import './App.scss';
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';
import categoryApi from './api/categoryApi';

function App() {
  const [categories, setCategories] = useState([]);
  const cart = {
    products: [],
    totalItems: () => cart.products.length,
    total: () => cart.products.reduce((total, product) => total + product.price, 0),
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
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryApi.getAll();
        const result = ["all", ...res];
        if (categories !== result) {
          setCategories(result);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategories();
  }, []);
  return (
    <div className="App">
      <Navbar cart={cart} />
      <Header />
      <ProductsDisplay cart={cart} categories={categories} />
    </div>
  );
}

export default App;
