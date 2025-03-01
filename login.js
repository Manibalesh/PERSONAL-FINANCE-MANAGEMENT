// src/App.jsx
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
      alert(response.data.message);
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="p-6 rounded-lg shadow-lg bg-gray-900 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 mb-4 rounded bg-gray-800"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded bg-gray-800"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-blue-500 p-2 rounded">Login</button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-400">Forgot Password?</a>
        </div>
        <div className="text-center mt-2">
          Don't have an account? <a href="#" className="text-blue-400">Register</a>
        </div>
      </div>
    </div>
  );
}
