import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Cart from './pages/Cart';
import CustomDesign from './pages/CustomDesign';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Track from './pages/Track';
import Feedback from './pages/Feedback';
import History from './pages/History';
import OrderConfirmation from './pages/OrderConfirmation';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  inStock: boolean;
}

interface SignUpProps {
  onSignUp: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
  // Component logic
  return (
    <div>
      <button onClick={onSignUp}>Sign Up</button>
    </div>
  );
};

function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Elegant Velvet Curtain',
      price: 129.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/213267_1_medium.jpg',
      description: 'The Elegant Velvet Curtain, priced at ₹129.99, is a luxurious addition to any room. Its rich texture and sheen create a sophisticated ambiance, perfect for those seeking a dramatic look. Velvet curtains are not only visually appealing but also provide excellent insulation, helping to retain warmth in colder months. They effectively block out light, making them ideal for bedrooms or entertainment spaces. Additionally, their thickness helps absorb external noise, contributing to a quieter interior environment.',
      inStock: true,
    },
    {
      id: '2',
      name: 'Sheer White Curtain',
      price: 79.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206933_1_big.jpg',
      description: 'For a lighter and more modern feel, the Sheer White Curtain is an excellent choice at ₹79.99. These curtains allow natural light to filter through, creating a breezy and airy atmosphere. They offer partial privacy without completely blocking views, making them perfect for layering with heavier curtains or using alone for a minimalist décor.',
      inStock: true,
    },
    {
      id: '3',
      name: 'Blackout Curtain',
      price: 99.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206954_1_medium.jpg',
      description: 'The Blackout Curtain, available for ₹99.99, is designed to block out all light, ensuring complete darkness. This feature makes it particularly useful for bedrooms, promoting better sleep and privacy. Blackout curtains also help regulate room temperature by preventing drafts, keeping spaces cool in summer and warm in winter. Their thick lining reduces external noise, creating a peaceful environment ideal for rest or relaxation.',
      inStock: true,
    },
    {
      id: '4',
      name: 'Patterned Curtain',
      price: 89.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206942_1_medium.jpg',
      description: 'For those looking to add personality to their space, the Patterned Curtain is a great option at ₹89.99. These curtains come in a wide range of styles, from bold prints to subtle designs, allowing homeowners to enhance their décor with unique flair. Whether you prefer floral, geometric, or abstract patterns, theres a style to suit every theme. Patterned curtains can instantly elevate the aesthetic appeal of a room, making them a popular choice for living areas or dining spaces.',
      inStock: true,
    },
    {
      id: '5',
      name: 'Linen Curtain',
      price: 119.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206972_1_big.jpg',
      description: 'The Linen Curtain, priced at ₹119.99, offers a natural and rustic charm with its organic texture and breathable material. Linen curtains allow soft light to enter while maintaining privacy, creating a warm and inviting atmosphere. They are durable and timeless, pairing well with different interior styles, from modern to traditional. Linen curtains are also a great choice for those who prefer a more relaxed, casual look without compromising on elegance.',
      inStock: true,
    },
    {
      id: '6',
      name: 'Thermal Insulated Curtain',
      price: 139.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206176_3_big.jpg',
      description: 'For energy-conscious homeowners, the Thermal Insulated Curtain is a valuable investment at ₹139.99. These curtains are designed to keep homes warm by preventing heat loss during winter and blocking heat during summer, thereby reducing energy bills. Often paired with fleece or thermal lining, they provide maximum insulation around windows. This feature not only saves on heating and cooling costs but also contributes to a more sustainable living environment.',
      inStock: true,
    },
    {
      id: '7',
      name: 'Striped Curtain',
      price: 89.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/214066_medium.jpg',
      description: 'If you are looking to make a bold statement, the Striped Curtain is an excellent choice at ₹89.99. Striped patterns add visual interest and modernity to interiors, working well in both casual and formal settings. Depending on the color and width of the stripes, these curtains can easily adapt to different room styles, from playful to sophisticated.',
      inStock: true,
    },
    {
      id: '8',
      name: 'Floral Curtain',
      price: 99.99,
      imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/4e853f3edb41c64c7f9b2131c7dd0a1c/m/a/mainshot_1_213399_flamboyance-opal.jpg',
      description: 'Lastly, the Floral Curtain, available for ₹99.99, brings a touch of nature indoors with its elegant patterns. Floral designs create a serene atmosphere, offering privacy while enhancing the room aesthetic appeal. These curtains are perfect for those who want to add a delicate, natural element to their décor without compromising on style or functionality. Whether used in a bedroom or living room, floral curtains can instantly brighten up the space with their beautiful prints.',
      inStock: true,
    },
  ]); // Initial products

  const [orders] = useState([
    { id: '1', customerName: 'John Doe', total: 500, date: '2025-05-01' },
    { id: '2', customerName: 'Jane Smith', total: 1200, date: '2025-05-05' },
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />

              {/* Protected Routes */}
              <Route
                path="/home"
                element={
                  isAuthenticated ? (
                    <Home onLogout={handleLogout} products={products} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              <Route
                path="/admin"
                element={
                  isAuthenticated ? (
                    <Admin
                      onLogout={handleLogout}
                      onUpdateProducts={setProducts}
                      products={products}
                      orders={orders}
                    />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />

              {/* Other Routes */}
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/custom-design" element={<CustomDesign />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/history" element={<History />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/track" element={<Track />} />
              <Route path="/feedback" element={<Feedback />} />

              {/* Redirect root to login */}
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;