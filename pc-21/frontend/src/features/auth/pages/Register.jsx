import React from 'react';
import "../style/form.scss"
import { Link } from 'react-router';

const Register = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }


  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
            />
            
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
            />

            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </main>
    </div>
  );
};

export default Register;
