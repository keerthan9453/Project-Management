// src/LoginPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-200 to-stone-400 relative">
      
      {/* Top-right nav bar */}
      <nav className="absolute top-0 right-0 p-6 flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-white text-stone-700 rounded shadow hover:bg-stone-100"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")} // If you plan to add a sign-up page
          className="px-4 py-2 bg-stone-700 text-white rounded shadow hover:bg-stone-800"
        >
          Sign Up
        </button>
      </nav>

      {/* Centered login card */}
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-stone-700 mb-6 text-center">
            Welcome Back
          </h2>
          {/* Add login form fields here */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;