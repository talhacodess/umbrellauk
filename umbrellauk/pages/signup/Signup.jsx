import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/register', formData);
      console.log("Registered:", res.data);
      alert("Registration successful. You can now log in.");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert("Registration failed.");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-5">Admin Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 w-full"
          value={formData.username}
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
