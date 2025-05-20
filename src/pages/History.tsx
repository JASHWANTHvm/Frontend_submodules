import { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  interface Order {
    customer: {
      name: string;
    };
    total: number;
    items: {
      quantity: number;
      name: string;
      price: number;
    }[];
  }
  
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-2">Order #{index + 1}</h2>
              <p className="text-gray-700 mb-2">Customer: {order.customer.name}</p>
              <p className="text-gray-700 mb-2">Total: ₹{order.total.toFixed(2)}</p>
              <ul className="space-y-2">
                {order.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">
                    {item.quantity}x {item.name} - ₹{item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;