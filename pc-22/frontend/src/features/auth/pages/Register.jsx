import React from 'react';
import { Link, useNavigate } from 'react-router';
import '../style/form.scss';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

const Register = () => {

    const {handleRegister, loading} = useAuth()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await handleRegister(username, email, password)
        navigate("/")
        setPassword("")
        setEmail("")
        setUsername("")
    }


    if(loading){
        return (
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }

  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
            value={username}
            onInput={(e)=>setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
            <input
            value={email}
            onInput={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <input
            value={password}
            onInput={(e)=>setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
            <button className="button primary-button">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
