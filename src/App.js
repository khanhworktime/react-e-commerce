
import './App.scss';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Catagories from './components/Catagories/Catagories';
import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';
import categoryApi from './api/categoryApi';

function App() {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
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
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Catagories categories={categories} />
      <ProductsDisplay category={currentCategory} />
    </div>
  );
}

export default App;
