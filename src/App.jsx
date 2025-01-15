import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity } // Add the quantity
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
    };    

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Calculate total quantity of all items in the cart
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <NavBar cartItemCount={cartItemCount} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    );
};

export default App;
