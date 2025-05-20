import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/custom-design" className="hover:underline">Custom Design</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded mb-4 text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-indigo-800 py-2 px-4 rounded hover:bg-yellow-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-yellow-300"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-yellow-300"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Our Team © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;