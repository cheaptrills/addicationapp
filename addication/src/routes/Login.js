import React from 'react';
//import './App.css';
//import './stylechloe.css';

function Login() {

  return (
    <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
          <button type="button" className="btn">
            Login
          </button>
      </div>
    );
}

export default Login;