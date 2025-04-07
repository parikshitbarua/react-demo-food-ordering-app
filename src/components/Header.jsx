import React, { useContext } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants.jsx";
import useOnlineStatus from "../utils/hooks/useOnlineStatus.jsx";
import UserContext from "../utils/context/UserContext.jsx";
import { useSelector } from "react-redux";

const Header = () => {
    const isOnline = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)

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
                        <Link to="/cart">
                            Cart ({ cartItems.length })
                        </Link>
                    </li>
                    <li>
                        { loggedInUser }
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;