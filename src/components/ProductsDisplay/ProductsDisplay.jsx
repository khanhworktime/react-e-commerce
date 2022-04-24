
import './ProductsDisplay.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function ProductsDisplay(props){
    let tag = props.tag;
    console.log(tag);
    let products;

    async function FetchProducts(tag){
        if(tag === 'All')
            fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>products = json)
        else fetch(`https://fakestoreapi.com/products/${tag}`)
            .then(res=>res.json())
            .then(json=>products = json)
    }

    FetchProducts(tag);
    
    console.log(products)
    return(
        <div className="products-display">
            abc
        </div>
    )
};