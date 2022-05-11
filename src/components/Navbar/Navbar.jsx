
import "./Navbar.scss";
import CartIcon from "bootstrap-icons/icons/basket.svg";
import Modal from "react-bootstrap/Modal";
import Cart from "./Cart/Cart";
import {useState, memo, useEffect} from "react";
import {Link} from "react-router-dom"

function Navbar({cart}) {
    const [show, setShow] = useState(false);
    const displayCartHandler = (cart)=>{
        setShow(true);
    }
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            const navbar = document.querySelector(".navbar");
            const offset = window.scrollY;
            if(offset === 0) navbar.style["padding"] = "1rem";
            else navbar.style["padding"] = "0";
        })
    });
    return (
        <div className="navbar">
            <div className="nav-fullsize d-flex justify-content-between align-items-center">
                <img src="./favicon.svg" alt="" width="64px"/>
                <ul className="menu d-flex flex-row align-items-center">
                    <li className="menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item"><a href="# ">Category</a></li>
                    <li className="menu-item"><a href="# ">About</a></li>
                    <li className="menu-item">
                        <button class="no-layout" onClick={()=>displayCartHandler(cart)}><img src={CartIcon} className="img-icons" height="32px" fill="white" alt=""/></button>
                    </li>
                </ul>
            </div>
            <Modal size="lg" show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{maxHeight: "72vh", overflow: "scroll", overflowX:"hidden"}}>
                    <Cart cart={cart} />
                </Modal.Body>
                <Modal.Footer>
                    <button className="border-only secondary" onClick={() =>setShow(false)}>Close</button>
                    <button className="primary" onClick={() =>setShow(false)}>Checkout</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default memo(Navbar);