
import "./Cart-Product.scss";


export default function CartProduct({product, cart, update}){

    console.log({CartPro: cart.products});

    function removeHandler(id){
        cart.removeItem(id);
        update();
    }

    function addHandler(id){
        cart.addItem(id);
        update();
    }

    return(
        <div className="cart-product align-items-center row">
            <img src={product.image} className="col-2" alt=""/>
            <span className="name col-6">{product.title}</span>
            <span className="amount text-center col-2">{product.amount}</span>
            <span className="func-btn col-2 d-flex flex-row justify-content-around">
                <button className="add secondary" onClick={() => addHandler(product.id)}>+</button>
                <button className="remove secondary" onClick={() => removeHandler(product.id)}>-</button>
            </span>
        </div>
    )
}