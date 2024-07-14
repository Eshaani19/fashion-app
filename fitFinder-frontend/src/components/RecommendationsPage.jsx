import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecommendationsPage = () => {
  const [category, setCategory] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecommendations = () => {
    if (category) {
      axios.post("http://127.0.0.1:5000/recommendations", { category })
        .then(response => {
          setRecommendations(response.data);
        })
        .catch(error => {
          console.error("Error fetching recommendations:", error);
          setError("Failed to fetch recommendations. Please try again.");
        });
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    fetchRecommendations();
  };

  return (
    <div className="pt-16"> {/* Space for navbar */}
      <div className="recommendations-page bg-gradient-to-r from-pink-500 to-orange-400 min-h-screen p-6">
        <div className="flex items-end mb-6 gap-4">
          <div className="flex-grow max-w-xs">
            <label className="block text-white mb-2">Choose a category:</label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a category</option>
              <option value="casual">Casual</option>
              <option value="formal">Formal</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Apply Filter
          </button>
        </div>
        {error && <p className="text-red-500 px-4 mb-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {recommendations.map((product, index) => (
            <div key={index} className="border p-4 rounded-md shadow-md bg-white">
              <img
                src={`http://127.0.0.1:5000/images/${product.image_url.split('/').pop()}`}
                alt={product.product_name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <p className="text-lg font-semibold">{product.product_name}</p>
              <p className="text-gray-600">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
