import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from './AuthContext'; // Import AuthContext for managing authentication

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useAuth(); // Destructure login from AuthContext

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://authentication-app-article-1.onrender.com/api/v1/user/login', // Update with your backend endpoint
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage(response.data.message);
      console.log('Token:', response.data.token);

      // Store the token and update authentication state
      login(response.data.token); // Call the login function with the token

      // Navigate to the profile or cart page after successful login
      navigate('/profile'); // You can replace '/profile' with '/cart' or any route you want to redirect to
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Login failed');
      } else {
        setMessage('Login failed');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
