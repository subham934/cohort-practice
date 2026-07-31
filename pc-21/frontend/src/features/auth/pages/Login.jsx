import React, { useState } from 'react'
import "../style/form.scss"
import { Link,useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const {user, handleLogin, loading} = useAuth()

    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = async (e)=>{
        e.preventDefault()

        await handleLogin(username, password)
        // console.log("user loggedIn")
        navigate("/")
    }

    if(loading){
        return <h1>Loading</h1>
    }

  return (
    <div>
        <main>
            <div className="form-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <input value={username} onInput={(e)=> setUsername(e.target.value)} type="text" placeholder='Enter Username' name='username' id='username' />
                    <input value={password} onInput={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Password' name='password' id='password' />
                    <button type="submit">Login</button>
                    
                </form>
                <p className='text-center'>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </main>
    </div>
  )
}

export default Login