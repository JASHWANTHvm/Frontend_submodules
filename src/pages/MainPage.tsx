import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Welcome to Our Platform</h1>
      <p className="text-center text-gray-600 mb-8">
        Please log in or sign up to continue.
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MainPage;