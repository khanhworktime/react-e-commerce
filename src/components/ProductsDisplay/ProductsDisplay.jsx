
import './ProductsDisplay.scss';
import { useState, useEffect } from 'react';
import productsApi from '../../api/productApi';
import Product from './Products/Product'

export default function ProductsDisplay({categories}){
    const [category, setCategory] = useState("all");
    const [products, setProduct] = useState([]);
    const method = (category === "all") ? "getAll":"getCategory";
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                    const res = await productsApi[method]((category==="all")? "": category);
                    setProduct(res);
            } catch (err) {
                console.error(err);
            }
        }
        fetchProducts();
    },[category, method])

    const categoryChangeHandler = (tag, tagIndex) => {
        setCategory(tag);
        const allCategoryElements = document.querySelectorAll(".categories>*");
        allCategoryElements.forEach((e, i)=>{
            if (e.hasAttribute("current")) e.removeAttribute("current");
            if (i === tagIndex) e.setAttribute("current","");
        })
    }
    return(
        <>
            <div className="categories flex-wrap d-flex justify-content-around">
                {categories.map(function(tag,i){
                    return (
                    <button className="tag button border-only" id={`tag${i}`} key={i} onClick={()=>categoryChangeHandler(tag, i) } current = {(i===0)?"":null}>{tag}</button>
                    )}
                )}
            </div>
            <div className="products-display d-flex flex-wrap">
                    {products.map((product, i)=>{
                        return(
                            <div className="product-cover col-xs-12 col-sm-6 col-lg-4 col-xl-3" key={i}>
                                <Product props={{...product}}/>
                            </div>
                        )
                    })}
            </div>
        </>
    )
};