
import './App.scss';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';
import categoryApi from './api/categoryApi';

function App() {
  const [categories, setCategories] = useState([]);
  const cart = {
    products: [],
    getItemsTotal: () => cart.products.length,
    productsDistinct: () => [...new Set(cart.products)],
    getItemAmount: (id) => cart.products.filter((product) => product.id === id).length,
    total: () => cart.products.reduce((total, product) => total + product.price, 0),
    removeItem: (id) => cart.products = cart.products.filter((product) => product.id !== id)
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
