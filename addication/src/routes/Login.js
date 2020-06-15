import React from "react";
//import './App.css';
import "../css/stylejonas.css";
import "../css/stylechloe.css";
import logosvg from "../SVG/logo.svg";
import profielsvg from "../SVG/profiel.svg";
import passwordsvg from "../SVG/password.svg";

function Login() {
  return (
    <div className="App">
      <div className="base-container">
        <header>
          <img src={logosvg} class="logo" />
        </header>

        <div className="content">
          <div className="form" method="post">
            <div className="form__field">
              <img src={profielsvg} className="icon" id="profileicon" />
              <input
                type="text"
                className="form-control"
                name="name"
                id="naam"
                placeholder="Gebruikersnaam"
              ></input>
            </div>
            <div className="form__field">
              <img src={passwordsvg} class="icon" />
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Wachtwoord"
              ></input>
            </div>
            <div class="form__field">
              <input type="submit" value="Login" class="btn"></input>
            </div>
          </div>
          <a className="link-account" href="register.js">
            Heb je nog geen account?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
