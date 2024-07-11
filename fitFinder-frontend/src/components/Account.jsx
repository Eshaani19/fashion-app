import React from 'react';

const Account = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <div className="bg-white shadow-md rounded p-6">
        <p className="text-gray-700">Username: JohnDoe</p>
        <p className="text-gray-700">Email: johndoe@example.com</p>
        <p className="text-gray-700">Member since: January 2023</p>
      </div>
    </div>
  );
};

export default Account;
