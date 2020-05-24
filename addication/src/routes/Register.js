import React, {useState, useContext} from 'react';
import GlobalContext from "../context/GlobalContext";
import {useHistory} from "react-router-dom";

//import './App.css';

function Register() {

  const [fields, setFields] = useState({

    username: null,
    password: null

  });

  const[globalData,setGlobalData] = useContext(GlobalContext);

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

    setGlobalData({...globalData,user:fields});

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
    <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={event=>setField(event,"username")} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={event=>setField(event,"password")} />
            </div>
          </div>
        </div>
          <button type="button" className="btn" onClick={handleSubmit} >
            Register
          </button>
      </div>
    );
}

export default Register;