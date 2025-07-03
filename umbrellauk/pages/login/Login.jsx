import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/login', formData);
      console.log("Logged in:", res.data);
      localStorage.setItem('token', res.data.token);
      alert("Login successful");
      // redirect to dashboard here if needed
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert("Login failed");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-5">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
