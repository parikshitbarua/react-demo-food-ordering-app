import React from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants.jsx";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src={ LOGO_URL }
                    className="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;