
import CartProduct from "./Cart-Product";
import {useState} from "react";
import "./Cart.scss"

export default function Cart({cart}){
    const [update, setUpdate] = useState(true);
    return(
        <div className="cart-detail containers">
            {cart.productsDistinct().map((product, i)=>(<CartProduct product={product} cart={cart} update={() => setUpdate(!update)} key={product.id} />))}
        </div>
    )
}