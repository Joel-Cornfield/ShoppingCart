import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <hr></hr>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.. try adding something!</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h2 className="product-title">{item.title}</h2>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            )}
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
