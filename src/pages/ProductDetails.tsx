import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: '1',
    name: 'Elegant Velvet Curtain',
    price: 129.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/213267_1_medium.jpg',
    description: 'The Elegant Velvet Curtain, priced at ₹129.99, is a luxurious addition to any room. Its rich texture and sheen create a sophisticated ambiance, perfect for those seeking a dramatic look. Velvet curtains are not only visually appealing but also provide excellent insulation, helping to retain warmth in colder months. They effectively block out light, making them ideal for bedrooms or entertainment spaces. Additionally, their thickness helps absorb external noise, contributing to a quieter interior environment. With a variety of colors and styles available, velvet curtains can easily be tailored to suit different aesthetics.',
    feedback: [
      { rating: 5, comment: 'Amazing quality and texture!' },
      { rating: 4, comment: 'Looks great in my living room.' },
    ],
  },
  {
    id: '2',
    name: 'Sheer White Curtain',
    price: 79.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206933_1_big.jpg',
    description: 'For a lighter and more modern feel, the Sheer White Curtain is an excellent choice at ₹79.99. These curtains allow natural light to filter through, creating a breezy and airy atmosphere. They offer partial privacy without completely blocking views, making them perfect for layering with heavier curtains or using alone for a minimalist décor.',
    feedback: [
      { rating: 4, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
  {
    id: '3',
    name: 'Blackout Curtain',
    price: 99.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206954_1_medium.jpg',
    description: 'The Blackout Curtain, available for ₹99.99, is designed to block out all light, ensuring complete darkness. This feature makes it particularly useful for bedrooms, promoting better sleep and privacy. Blackout curtains also help regulate room temperature by preventing drafts, keeping spaces cool in summer and warm in winter. Their thick lining reduces external noise, creating a peaceful environment ideal for rest or relaxation.',
    feedback: [
      { rating: 4, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
  {
    id: '4',
    name: 'Patterned Curtain',
    price: 89.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206942_1_medium.jpg',
    description: 'For those looking to add personality to their space, the Patterned Curtain is a great option at ₹89.99. These curtains come in a wide range of styles, from bold prints to subtle designs, allowing homeowners to enhance their décor with unique flair. Whether you prefer floral, geometric, or abstract patterns, theres a style to suit every theme. Patterned curtains can instantly elevate the aesthetic appeal of a room, making them a popular choice for living areas or dining spaces.',
    feedback: [
      { rating: 3, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
  {
    id: '5',
    name: 'Linen Curtain',
    price: 119.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206972_1_big.jpg',
    description: 'The Linen Curtain, priced at ₹119.99, offers a natural and rustic charm with its organic texture and breathable material. Linen curtains allow soft light to enter while maintaining privacy, creating a warm and inviting atmosphere. They are durable and timeless, pairing well with different interior styles, from modern to traditional. Linen curtains are also a great choice for those who prefer a more relaxed, casual look without compromising on elegance.',
    feedback: [
      { rating: 4, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
  {
    id: '6',
    name: 'Thermal Insulated Curtain',
    price: 139.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/0/206176_3_big.jpg',
    description: 'For energy-conscious homeowners, the Thermal Insulated Curtain is a valuable investment at ₹139.99. These curtains are designed to keep homes warm by preventing heat loss during winter and blocking heat during summer, thereby reducing energy bills. Often paired with fleece or thermal lining, they provide maximum insulation around windows. This feature not only saves on heating and cooling costs but also contributes to a more sustainable living environment.',
    feedback: [
      { rating: 4, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
  {
    id: '7',
    name: 'Striped Curtain',
    price: 89.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/2/1/214066_medium.jpg',
    description: 'If you are looking to make a bold statement, the Striped Curtain is an excellent choice at ₹89.99. Striped patterns add visual interest and modernity to interiors, working well in both casual and formal settings. Depending on the color and width of the stripes, these curtains can easily adapt to different room styles, from playful to sophisticated.',
    feedback: [
      { rating: 4, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
  {
    id: '8',
    name: 'Floral Curtain',
    price: 99.99,
    imageUrl: 'https://cdn.ddecor.com/media/catalog/product/cache/4e853f3edb41c64c7f9b2131c7dd0a1c/m/a/mainshot_1_213399_flamboyance-opal.jpg',
    description: 'Lastly, the Floral Curtain, available for ₹99.99, brings a touch of nature indoors with its elegant patterns. Floral designs create a serene atmosphere, offering privacy while enhancing the room aesthetic appeal. These curtains are perfect for those who want to add a delicate, natural element to their décor without compromising on style or functionality. Whether used in a bedroom or living room, floral curtains can instantly brighten up the space with their beautiful prints.',
    feedback: [
      { rating: 4, comment: 'Very elegant and modern.' },
      { rating: 3, comment: 'Good, but could be thicker.' },
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
      alert(`${product.name} has been added to your cart!`);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
      navigate('/checkout', { state: { product } });
    }
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <span className="text-xl font-bold text-gray-800">₹{product.price.toFixed(2)}</span>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Feedback</h2>
          {product.feedback && product.feedback.length > 0 ? (
            <ul className="space-y-4">
              {product.feedback.map((fb, index) => (
                <li key={index} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-xl ${
                          star <= fb.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700">{fb.comment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No feedback available for this product.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;