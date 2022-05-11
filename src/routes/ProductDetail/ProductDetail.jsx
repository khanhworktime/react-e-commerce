/* eslint-disable react-hooks/exhaustive-deps */

import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import productApi from '../../api/productApi'
import Navbar from '../../components/Navbar/Navbar'
import Loading from '../../components/Loading/Loading'
import Footer from '../../components/Footer/Footer'
import RelProducts from './RelProducts/RelProducts'
import "./ProductDetail.scss"

export default function ProductDetail({cart}){

    const params = useParams();
    const [product, setProduct] = useState({});
    const [cartProducts, setCartProducts] = useState(cart.products);

    cart.products = cartProducts;
    useEffect(() => {
        const fetchProduct = async () => {
            try{
            const res = await productApi.getId(params.productID);
            setProduct(res);
            }
            catch(err) {
                console.log(err);
            }
        }

        fetchProduct();
    }
    , [])
    
    return(
        <div className="product-detail-view">
            <Navbar cart={cart}/>
            {(Object.keys(product).length !== 0) ? <div className="product-detail d-flex flex-column align-items-center flex-md-row justify-content-around">
                    <img src={product.image} alt="" />
                    <div className="content">
                            <h2 className="title">{product.title}</h2>
                            <p className="category">{product.category}</p>
                            <p className="desc">{product.description}</p>
                            <div className="price">${product.price}</div>
                            <button className="button"
                            onClick={() => {
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
                            }
                            >Add to cart</button>

                    </div>
            </div> : <Loading/>}
            <h3>More relative</h3>
            <RelProducts curProduct={product}/>
            <Footer />
        </div>
    )
}