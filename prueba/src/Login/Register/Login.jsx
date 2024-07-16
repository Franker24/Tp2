import React from 'react'
import "./Login.css";


const Login = () => {
  return (
    <>
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" name="name" placeholder="Username" required />
            </div>
            <div className='input-box'>
                <input type="password" name="password" placeholder="Password" required />
            </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
                <a href="#">   Forgot Password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Dont have an account? <a href="/register">Register</a></p>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login