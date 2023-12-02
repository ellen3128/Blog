import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    // email: "",
    password: "",
  }) 

  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

   
  // console.log(inputs)

  const handleSubmit = async e => {
    e.preventDefault()
    try {
    await axios.post("http://localhost:8800/api/auth/login", inputs)
    navigate('/')
    // console.log(res)
    } catch (err) {
      // console.log(err)
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
        {/* <input required type="email" placeholder="email"/> */}
        <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span> Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
