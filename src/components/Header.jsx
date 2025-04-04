import React from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants.jsx";
import useOnlineStatus from "../utils/hooks/useOnlineStatus.jsx";

const Header = () => {
    const isOnline = useOnlineStatus();
    console.log(isOnline)
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
                        <Link to="/grocery">Grocery 🍆</Link>
                    </li>
                    <li>
                        Online Status: { isOnline ? "💚" : "💔"}
                    </li>
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