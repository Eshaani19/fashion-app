import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecommendationsPage = () => {
  useEffect(() => {
    axios.post('http://127.0.0.1:5000/recommend', { preferences: 'casual' })
      .then(response => {
        setRecommendations(response.data.recommendations);
        setLoading(false);
      })
      .catch(error => {
        toast.error('Failed to fetch recommendations');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recommendations-page bg-gradient-to-r from-pink-500 to-orange-400 min-h-screen p-6">
      <h1 className="text-white text-3xl font-bold mb-4">Recommended Outfits</h1>
      <div className="recommendations-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((item, index) => (
          <div key={index} className="recommendation-item bg-white p-4 rounded shadow-md">
            <img src={item.image_url} alt={item.product_name} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-lg font-bold">{item.product_name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-gray-900 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
