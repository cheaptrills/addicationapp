import React from 'react';
//import './App.css';
//import './stylechloe.css';

function Login() {

  return (
    
    <div className="base-container">
      <header>
       <img src="../SVG/logo.svg" class="logo"/>
       
   </header>
        <div className="header">Login</div>
        <div className="content">
          <div className="form" method="post">
            <div className="form__field">
            <img src="../SVG/profiel.svg" class="icon" id="profileicon"> </img>
            <input type="text" class="form-control" name="name" id="naam" placeholder="Gebruikersnaam"> </input>
              
            </div>
            <div className="form__field">
            <img src="../SVG/password.svg" class="icon" > </img>
              <input type="password" class="form-control" name="password" id="password" placeholder="Wachtwoord"></input>
            </div>
          
        
        <div class="form__field">
					<input type="submit" value="maak account" class="btn"> </input>
          </div>
				</div>
        <a class="link-account" href="register.js">Heb je nog geen account?</a>
        </div>
      </div>


     
    );
}

export default Login;