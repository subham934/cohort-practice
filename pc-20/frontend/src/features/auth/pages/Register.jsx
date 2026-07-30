import React, { useState } from 'react';
import '../style/form.scss';
import { Link } from 'react-router';
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function handleSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3000/api/auth/register", {
             username, email, password
        }, {
            withCredentials: true
        })
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
        setUsername('')
        setEmail('')
        setPassword('')
    }



  return (
    <div>
      <main>
        <div className="border-div">

        <div className="form-container">
          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onInput={(e)=>setUsername(e.target.value)}
              required
            />
            
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onInput={(e)=>setEmail(e.target.value)}
              required
            />
            
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onInput={(e)=>setPassword(e.target.value)}
              required
            />
            
            <button>Register</button>
          </form>
          <p>Already have an account ? <Link className='togglAuthform' to="/login">Login</Link></p>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
