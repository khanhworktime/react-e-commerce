
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
            <span className="name col-4">{product.title}</span>
            <span className="amount text-center d-flex flex-column col-4">
                <p>{product.amount}</p>
                <span className="func-btn d-flex flex-row justify-content-center">
                    <button className="add secondary" onClick={() => addHandler(product.id)}>+</button>
                    <button className="remove secondary" onClick={() => removeHandler(product.id)}>-</button>
                </span>
            </span>
            <span className="price text-center col-2">{product.price}</span>
            
        </div>
    )
}