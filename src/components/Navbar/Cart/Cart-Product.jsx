
import "./Cart-Product.scss";


export default function CartProduct({product, cart, update}){

    function removeHandler(id){
        cart.removeItem(id);
        update();
    }

    return(
        <div className="cart-product d-flex align-items-center flex-row justify-content-between">
            <img src={product.image} alt=""/>
            <span className="amount">{cart.getItemAmount(product.id)}</span>
            <button className="remove secondary" onClick={() => removeHandler(product.id)}>X</button>
        </div>
    )
}