import React from 'react'


const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="terms" /> I agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="signup-button">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup