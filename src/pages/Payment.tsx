import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({ name: '', email: '' });
  const items = [
    { productId: '1', name: 'Elegant Velvet Curtain', price: 129.99, quantity: 1 },
  ]; // Replace with actual cart items
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      items,
      total,
      paymentMethod: 'Cash on Delivery', // Default payment method
      customer,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/orders', order);
      navigate('/order-confirmation', { state: { order: response.data } });
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Payment</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            placeholder="Enter your full name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Customer Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            placeholder="Enter your email address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <input
            type="text"
            id="payment-method"
            value="Cash on Delivery"
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h2>
          <ul className="text-gray-600">
            {items.map((item) => (
              <li key={item.productId} className="flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-gray-800 mt-4">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;