import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import CartItem from './CartItem.jsx';
import { plantsArray } from './plants.js';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const isInCart = (name) => cartItems.some((i) => i.name === name);

  const handleAddToCart = (plant) => dispatch(addItem(plant));

  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>
          Paradise Nursery
        </a>
        <div className="nav-links">
          <a href="#home" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a>
          <a href="#plants" onClick={(e) => { e.preventDefault(); setShowCart(false); }}>Plants</a>
          <a href="#cart" className="cart-link" aria-label={`Cart, ${totalQuantity} items`}
             onClick={(e) => { e.preventDefault(); setShowCart(true); }}>
            <svg viewBox="0 0 256 256" width="34" height="34" aria-hidden="true">
              <circle cx="80" cy="216" r="12" fill="#fff" />
              <circle cx="184" cy="216" r="12" fill="#fff" />
              <path d="M42 56h30l26 100h100l22-72H80" fill="none" stroke="#fff" strokeWidth="14"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((cat) => (
            <section key={cat.category}>
              <h2 className="category-title">{cat.category}</h2>
              <div className="product-list">
                {cat.plants.map((plant) => {
                  const added = isInCart(plant.name);
                  return (
                    <div className="product-card" key={plant.name}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <h3 className="product-title">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">${plant.cost}</p>
                      <button className="product-button" disabled={added}
                              onClick={() => handleAddToCart(plant)}>
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
