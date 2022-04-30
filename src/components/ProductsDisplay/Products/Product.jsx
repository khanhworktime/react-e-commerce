
import './Product.scss';

function Product({product, onUpdateCart}) {
    return(
    <div className="products d-flex flex-column justify-content-between">
        <img src={product.image} alt="" />
        <>
        <span className="category">{product.category}</span>
        <span className="title">{product.title}</span>
        <span className="price">${product.price}</span>
        <span className="rating">{product.rating.rate} 🌟</span>
        <button onClick={()=> onUpdateCart(product)} className="button">Add to cart</button>
        </>
    </div>)
}

export default Product;