
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import productApi from '../../api/productApi'
import Navbar from '../../components/Navbar/Navbar'
import "./ProductDetail.scss"

export default function ProductDetail({cart}){

    const params = useParams();
    const [product, setProduct] = useState({});

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
            <p>Detail product : {params.productID}</p>
        </div>
    )
}