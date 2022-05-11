
import './ProductsDisplay.scss';
import { useState, useEffect, memo } from 'react';
import productsApi from '../../api/productApi';
import Product from './Products/Product';
import Loading from '../Loading/Loading'

function ProductsDisplay({categories, cart}){
    const [category, setCategory] = useState("all");
    const [products, setProduct] = useState([]);
    const [cartProducts, setCartProducts] = useState(cart.products);
    const method = (category === "all") ? "getAll":"getCategory";
    
    cart.products = cartProducts;
    
    //Fetch product list data
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

    //Handdling the category changed
    const categoryChangeHandler = (tag, tagIndex) => {
        setCategory(tag);
        const allCategoryElements = document.querySelectorAll(".categories>*");
        allCategoryElements.forEach((e, i)=>{
            if (e.hasAttribute("current")) e.removeAttribute("current");
            if (i === tagIndex) e.setAttribute("current","");
        })
    }

    //Add cart item handler - If product not in cart yet, add product + amount property, else product property ++
    const cartUpdateHandler = (product) => {
        const productID = product.id;
        let isAdded = false;

        //Bug right here when try to delete an item
        //the cartProducts state is not update yet. 
        //This is why need a pre variable to carry cart.products variable
        const preCart = cart.products;
        const cartUpdate = (product, cartProducts) => {
            cartProducts.forEach((product, i) => {
                if (productID === product.id) {
                    cartProducts[i].amount += 1;
                    isAdded = true;
                }
            })
            if (!isAdded) cartProducts.push({...product, amount: 1});
        }

        cartUpdate(product, preCart);
        setCartProducts([...preCart]);
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
                    {(products.length !== 0) ? products.map((product, i)=>{
                        return(
                            <div className="product-cover col-xs-12 col-sm-6 col-lg-4 col-xl-3" id={`product-${i}`} key={i}>
                                <Product onUpdateCart={cartUpdateHandler} product={product}/>
                            </div>
                        )
                    }):(<Loading />)
                }
            </div>
        </>
    )
};

export default memo(ProductsDisplay);