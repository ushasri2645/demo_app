import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor='username'>User Name:</label>
        <input id='username'/>
      </div>
      <div>
      <label htmlFor='password'>Password:</label>
        <input id='password'/>
      </div>
    </div>
  )
}

export default Login
