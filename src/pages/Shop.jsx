import React, { useEffect, useState } from 'react';
import '../styles/Shop.css';

const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({}); // Track quantity per product

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            // Initialize quantities for all products
            const initialQuantities = {};
            data.forEach(product => {
                initialQuantities[product.id] = 1;
            });
            setQuantities(initialQuantities);
        };

        fetchProducts();
    }, []);

    // Handle quantity change for specific product
    const handleQuantityChange = (productId, value) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: parseInt(value) || 1
        }));
    };

    return (
        <div>
            <h1>Shop</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <p className="price">${product.price.toFixed(2)}</p>
                        <input 
                            className="quantity"
                            type="number" 
                            min="1" 
                            value={quantities[product.id]} 
                            onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        />
                        <button onClick={() => addToCart(product, quantities[product.id])}>
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;