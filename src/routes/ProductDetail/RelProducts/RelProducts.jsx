
import './RelProducts.scss';
import {useState, useEffect} from 'react';
import productApi from "../../../api/productApi"
import {Link} from "react-router-dom"; 

function Product({product, changeProduct}){
    console.log(product)
    return(
        <Link to={`/productDetail${product.id}`} className="rel-product">
            <img src={product.image} alt="" />
        </Link>
    )
}

export default function RelProducts({curProduct}){
    const [relProducts, setRelProducts] = useState([]);
    const [changeProduct, setChangeProduct] = useState(curProduct);
    curProduct = changeProduct;
    useEffect(()=>{
        const fetchProducts = async () =>{
            const res = await productApi.getCategory(curProduct.category);
            setRelProducts(res);
        }

        fetchProducts();
    }, [relProducts, curProduct])

    return(
        <div className="rel-products d-flex flex-row align-items-center justify-content-around">
            {relProducts.map((product, i) => <Product product={product} key={i} changeProduct={()=>setChangeProduct()}/>)}
        </div>
    )
}