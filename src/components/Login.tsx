import React from 'react'
import './Login.css'

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login