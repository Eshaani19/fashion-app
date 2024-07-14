import React from 'react';

const Account = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-orange-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-pink-700">My Account</h2>
        <div className="bg-white shadow-md rounded p-6">
          <p className="text-gray-700">Username: JennyDoe</p>
          <p className="text-gray-700">Email: jennydoe@example.com</p>
          <p className="text-gray-700">Member since: May 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
