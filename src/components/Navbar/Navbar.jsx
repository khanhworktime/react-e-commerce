
import "./Navbar.scss";
import Cart from "bootstrap-icons/icons/basket.svg";
// import {Container, Row, Col} from "react-bootstrap"

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-fullsize d-flex justify-content-between align-items-center">
                <img src="./favicon.svg" alt="" width="64px" srcset="" />
                <ul className="menu d-flex flex-row align-items-center">
                    <li className="menu-item"><a href="# ">Home</a></li>
                    <li className="menu-item"><a href="# ">Category</a></li>
                    <li className="menu-item"><a href="# ">About</a></li>
                    <li className="menu-item">
                        <img src={Cart} className="img-icons" height="32px" fill="white" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;