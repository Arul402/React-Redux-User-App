import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Welcome to the Redux User App
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
        Explore the app to view all users, manage them efficiently, and get started by adding a new user to the list.
      </p>
      <button
        onClick={() => navigate('/adduser')}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-800 transition duration-200 cursor-pointer"
      >
        ➕ Add User
      </button>
    </div>
  );
}

export default Home;
