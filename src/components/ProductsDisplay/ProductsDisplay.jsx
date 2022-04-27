
import './ProductsDisplay.scss';
import { useState, useEffect } from 'react';
import productsApi from '../../api/productApi';
import Product from './Products/Product'

export default function ProductsDisplay({category}){
    const [products, setProduct] = useState([]);
    const method = (category === "all") ? "getAll":"getCategory";
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                if(category){
                    const res = await productsApi[method](category);
                    setProduct(res);
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchProducts();
    },[])
    return(
        <div className="products-display d-flex flex-wrap">
                {products.map((product, i)=>{
                    return(
                        <div className="product-cover col-xs-12 col-sm-6 col-lg-4 col-xl-3">
                            <Product props={{...product}}/>
                        </div>
                    )
                })}
        </div>
    )
};