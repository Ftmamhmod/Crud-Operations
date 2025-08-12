// src/pages/Login/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validEmail = "Test@gmail.com";
  const validPassword = "test123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email); // لو حابب تخزن الإيميل
      toast.success("Login successful! 🎉");
      navigate("/dashboard/home", { replace: true });
    } else {
      toast.warning("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Title */}
        <div className="flex items-center mb-6">
          <div className="w-1 h-6 bg-yellow-500 mr-2 rounded"></div>
          <h1 className="text-2xl font-bold">CRUD OPERATIONS</h1>
        </div>

        {/* Sign In */}
        <h2 className="text-lg font-semibold text-center">SIGN IN</h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Test Email: Test@gmail.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Test pass: test123"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-semibold transition"
          >
            SIGN IN
          </button>
        </form>

        {/* Forgot Password */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Forgot your password?{" "}
          <a href="#" className="text-yellow-500 hover:underline">
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
}
