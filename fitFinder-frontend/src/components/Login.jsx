import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();

          if (response.ok) {
            setMessage(data.message);
            setIsError(false);
            handleLogin();
            setTimeout(() => navigate('/'), 2000); // Navigate after 2 seconds
          } else {
            setMessage(data.message || 'Login failed');
            setIsError(true);
          }
    }catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
  };

  return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-orange-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-pink-700">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-300">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };

export default Login;
