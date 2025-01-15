import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../assets/cart.svg';
import '../styles/NavBar.css'; 

const NavBar = ({ cartItemCount }) => {
    return (
        <nav>
            <h1>Urban Threads</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                        <img src={cart} alt="Cart" className="cart-image" />
                        {cartItemCount > 0 && <span>{cartItemCount}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    cartItemCount: PropTypes.number.isRequired,
};

export default NavBar;
