import React, {useState, useContext} from 'react';
import GlobalContext from "../context/GlobalContext";
import {useHistory} from "react-router-dom";

import logo from "../SVG/logo.svg";
import password from "../SVG/password.svg";
import gebruikersnaam from "../SVG/profiel.svg";
//import './App.css';
//import '../stylechloe.css';

function Register() {

  const [fields, setFields] = useState({

    username: null,
    password: null

  });

  //const[globalData,setGlobalData] = useContext(GlobalContext);

  let history = useHistory();

  const handleSubmit = ()=> {
    if(fields.username == null || fields.username.length < 2){
      alert("username:" + fields.username);
      return null; 
    }
    
    if(fields.password == null || fields.password.length < 6){
      alert("password");
      return null; 
    }

    //setGlobalData({...globalData,user:fields});

    history.push("/profile");
    //
    //TODO: roep post aan voor een register in de backend
    //
  } 

  const setField = ({target}, field) => {

    let oldFields = fields;
    oldFields[field] = target.value;
    setFields(oldFields);

  };

  return (
  <div className="App">  
    <div className="base-container">
      <header>
       <img src={logo} className="logo" /> 
      </header>
      <div className="header">Register</div>
      <div className="content">
        <div className="form" method="post">
          <div className="form__field">
            <img src={gebruikersnaam} className="icon" id="profileicon" />
            <input className="form-control" type="text" name="username" placeholder="username" onChange={event=>setField(event,"username")} />
          </div>
          <div className="form__field">
            <img src={password} className="icon" /> 
            <input className="form-control" type="password" name="password" placeholder="password" onChange={event=>setField(event,"password")} />
          </div>
          <div className="form__field">
            <img src={password} className="icon" />          
            <input type="password" className="form-control" name="passwordconfirmation" id="passwordconfirmation" placeholder="Wachtwoord confirmatie"/>
          </div>
        </div>
      </div>
      <div className="form__field"> 
        <input type="submit" value="maak account" className="btn" onClick={handleSubmit} />
      </div>
      <a className="link-account" href="login.js">Heb je al een account?</a>
    </div>
  </div>  
    );
}

export default Register;