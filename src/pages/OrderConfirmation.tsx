import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  customer: {
    name: string;
  };
  total: number;
  items: OrderItem[];
}

const OrderConfirmation = () => {
  const location = useLocation();
  const { order }: { order?: Order } = location.state || {};
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Add a delay to show the content with animation
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!order) {
    return <div className="text-center text-gray-600 mt-12">Order not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`transition-opacity duration-700 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Animated Checkmark */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Order Confirmation Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Order Confirmed!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Thank you for your order will return 3-10 days, <span className="font-semibold">{order.customer.name}</span>!
        </p>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {order.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between text-gray-700 border-b pb-2"
              >
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-gray-900 mt-4">
            <span>Total:</span>
            <span>₹{order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;