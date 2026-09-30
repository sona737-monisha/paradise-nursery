import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const itemTotal = (item) => item.cost * item.quantity;
  const calculateTotalAmount = () => cart.reduce((sum, item) => sum + itemTotal(item), 0);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) => {
    if (item.quantity > 1) dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else dispatch(removeItem(item.name));
  };

  const handleRemove = (item) => dispatch(removeItem(item.name));
  const handleCheckoutShopping = () => alert('Coming Soon');

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <h3 className="cart-total">Total Cart Amount: ${calculateTotalAmount()}</h3>

      {cart.length === 0 && <p>Your cart is empty. Add some plants to get started.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.name}>
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">Unit price: ${item.cost}</div>
            <div className="cart-item-quantity">
              <button className="qty-btn" onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name}`}>-</button>
              <span className="qty-value">{item.quantity}</span>
              <button className="qty-btn" onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name}`}>+</button>
            </div>
            <div className="cart-item-total">Subtotal: ${itemTotal(item)}</div>
          </div>
          <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}

      <div className="cart-actions">
        <button className="continue-btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
