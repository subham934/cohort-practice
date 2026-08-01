import React from 'react';
import { Link, useNavigate } from 'react-router';
import '../style/form.scss';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

const Login = () => {
  const { user, loading, handleLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin(username, password);
    // console.log("User Logged In")
    navigate('/');
    setPassword('');
    setUsername('');
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              value={username}
              onInput={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
            <input
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <button className="button primary-button">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
