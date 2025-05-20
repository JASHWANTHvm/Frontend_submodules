import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, MessageCircle } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  // Define the CartItem type
  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
  
  const totalAmount = cartItems.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);

  const handleSendToWhatsApp = () => {
    const message = encodeURIComponent(
      `Your Cart:\n\n${cartItems
        .map(
          (item) =>
            `- ${item.name}\n  Quantity: ${item.quantity}\n  Price: $${item.price.toFixed(2)}\n`
        )
        .join('\n')}\nTotal Amount: $${totalAmount.toFixed(2)}`
    );

    const whatsappUrl = `https://wa.me/7397692446?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <ShoppingBag className="h-8 w-8" />
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="ml-6 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="mt-1 text-gray-600">₹{item.price}</p>
                    </div>
                    <button
                      className="ml-6 text-red-600 hover:text-red-800"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-indigo-700 transition mt-4 flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-green-700 transition mt-4 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send to WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;