import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Added state for messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      setMessage(response.data.message || 'Login successful!'); // Set success message
      console.log(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed. Please check your credentials.'); // Set error message
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p className="message">{message}</p>} {/* Display message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="links">
        <a href="/forgot-password">Forgot Password?</a>
        <a href="/register">Don't Have an Account? Register</a>
      </div>
    </div>
  );
};
server.listen(5000, () => {
  console.log("Server running at http://localhost:5000/");
});

