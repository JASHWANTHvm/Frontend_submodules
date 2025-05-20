import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Ensure this plugin is imported to extend jsPDF
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Extend jsPDF to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: import('jspdf-autotable').UserOptions) => jsPDF;
  }
}

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  inStock: boolean;
}

interface Order {
  id: string;
  customerName: string;
  total: number;
  date: string;
}

interface AdminProps {
  onLogout: () => void;
  onUpdateProducts: (updatedProducts: Product[]) => void;
  products: Product[];
  orders: Order[];
}

const Admin: React.FC<AdminProps> = ({ onLogout, onUpdateProducts, products, orders }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    name: '',
    price: 0,
    imageUrl: '',
    description: '',
    inStock: true,
  });

  const [availableProducts, setAvailableProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    // Calculate available products and total orders
    const available = products.filter((product) => product.inStock).length;
    setAvailableProducts(available);
    setTotalOrders(orders.length);
  }, [products, orders]);

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl || !newProduct.description) {
      alert('Please fill out all fields.');
      return;
    }

    const updatedProducts = [...products, { ...newProduct, id: Date.now().toString() }];
    onUpdateProducts(updatedProducts);
    setNewProduct({ id: '', name: '', price: 0, imageUrl: '', description: '', inStock: true });
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    onUpdateProducts(updatedProducts);
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.text('Order Report', 14, 16);
    doc.autoTable({
      head: [['Order ID', 'Customer Name', 'Total', 'Date']],
      body: orders.map((order) => [order.id, order.customerName, `₹${order.total}`, order.date]),
    });
    doc.save('order-report.pdf');
  };

  // Data for the bar chart
  const chartData = {
    labels: ['Available Products', 'Total Orders'],
    datasets: [
      {
        label: 'Count',
        data: [availableProducts, totalOrders],
        backgroundColor: ['#4CAF50', '#2196F3'], // Green and Blue
        borderColor: ['#388E3C', '#1976D2'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Admin Report Overview',
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 rounded mb-6">
        Logout
      </button>

      {/* Manage Products */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Manage Products</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full border rounded p-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.imageUrl}
            onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="w-full border rounded p-2"
          />
          <button
            onClick={handleAddProduct}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-600">₹{product.price}</p>
                </div>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Report Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-bold mb-4">Report Analysis</h2>
        <button
          onClick={handleDownloadReport}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download Order Report
        </button>
        <div className="w-full md:w-1/2 mx-auto mt-6">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Admin;