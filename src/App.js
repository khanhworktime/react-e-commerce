import "./App.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ProductsDisplay from "./components/ProductsDisplay/ProductsDisplay";
import categoryApi from "./api/categoryApi";
import Footer from "./components/Footer/Footer";

function App({ cart }) {
  const [categories, setCategories] = useState([]);
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
    };
    fetchCategories();
  }, []);
  return (
    <div className="App">
      <Navbar cart={cart} />
      <Header />
      <ProductsDisplay cart={cart} categories={categories} />
      <Footer />
    </div>
  );
}

export default App;
