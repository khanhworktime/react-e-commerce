
import './Product.scss';

function Product(props) {
    const {image, title, category, rating, price} = props.props;
    return(
    <div className="products d-flex flex-column justify-content-between">
        <img src={image} alt="" />
        <>
        <span className="category">{category}</span>
        <span className="title">{title}</span>
        <span className="price">${price}</span>
        <span className="rating">{rating.rate} 🌟</span>
        <a href="# " className="button">Add to cart</a>
        </>
    </div>)
}

export default Product;