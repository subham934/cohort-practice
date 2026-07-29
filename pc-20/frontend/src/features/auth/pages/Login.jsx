import React, { useState } from 'react';
import '../style/form.scss';
import { Link } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        'http://localhost:3000/api/auth/login',
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setUsername('');
    setPassword('');
  }

  return (
    <div>
      <main>
        <div className="border-div">
          <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Enter User Name"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
              <button>Login</button>
            </form>
            <p>
              Don't have an account?{' '}
              <Link className="togglAuthform" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
