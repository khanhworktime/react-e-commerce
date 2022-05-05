
import CartProduct from "./Cart-Product";
import {useState} from "react";
import "./Cart.scss"

export default function Cart({cart}){
    const [update, setUpdate] = useState(true);
    // Context finder
    console.log({Cart: cart.products})
    return(
        
        <div className="cart-detail container">
            {(!cart.isEmpty() && <div className="tb-header d-flex flex-row align-items-center">
                <div className="col-2">Products</div>
                <div className="col-6">Name</div>
                <div className="col-2 text-center">Amount</div>
                <div className="col-2 text-center"></div>
            </div>)}
            {cart.products.map((product, i)=>(<CartProduct product={product} cart={cart} update={() => setUpdate(!update)} key={i} />))}
        </div>
    )
}