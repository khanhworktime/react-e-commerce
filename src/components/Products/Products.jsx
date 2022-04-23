
import './Products.scss';
function Products(link, name, tag, rating, price, discount = "") {
    <div className="product">
        <img src={link} alt="" />
        <span className="name">{name}</span>
        if (disCount == "") {
            <span className="price">${price}</span>
        }
        else{
            <span className="price"><del>${price}</del> <span className="discount">${discount}!</span></span>
        }
        <span className="tag">{tag}</span>
        <span className="rating">{rating} 🌟</span>
        <a href="# " className="button">Add to cart</a>
    </div>
}

export default Products;