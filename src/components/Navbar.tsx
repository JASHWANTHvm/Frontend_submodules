import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mountain as Curtains, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart(); // Get the cart count from the context

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Curtains className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">Sakthi Murgan Curtains</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellow-300 font-medium transition duration-300">Home</Link>
            <Link to="/custom-design" className="text-white hover:text-yellow-300 font-medium transition duration-300">Request design</Link>
            <Link to="/about" className="text-white hover:text-yellow-300 font-medium transition duration-300">About</Link>
            <Link to="/contact" className="text-white hover:text-yellow-300 font-medium transition duration-300">Contact</Link>
            <Link to="/track" className="text-white hover:text-yellow-300 font-medium transition duration-300">Design</Link>
            <Link to="/feedback" className="text-white hover:text-yellow-300 font-medium transition duration-300">Feedback</Link>
            <Link to="/history" className="text-white hover:text-yellow-300 font-medium transition duration-300">Order History</Link>
            <Link to="/cart" className="relative text-white hover:text-yellow-300 font-medium transition duration-300">
              <ShoppingCart className="h-6 w-6" />
              {/* Display the cart count */}
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-indigo-600 text-white space-y-4 p-4">
            <Link to="/" className="block hover:text-yellow-300">Home</Link>
            <Link to="/custom-design" className="block hover:text-yellow-300">Request design</Link>
            <Link to="/about" className="block hover:text-yellow-300">About</Link>
            <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
            <Link to="/track" className="block hover:text-yellow-300">Design</Link>
            <Link to="/cart" className="block hover:text-yellow-300">Cart</Link>
            <Link to="/feedback" className="block hover:text-yellow-300">Feedback</Link>
            <Link to="/history" className="block hover:text-yellow-300">Order History</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;