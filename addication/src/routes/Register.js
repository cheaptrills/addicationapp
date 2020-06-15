import React, {useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";

import logo from "../SVG/logo.svg";
import password from "../SVG/password.svg";
import gebruikersnaam from "../SVG/profiel.svg";
import '../css/stylejonas.css';
import '../css/stylechloe.css';
//import './scale.js';
import {useUserDispatch} from "../context/UserContext";
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";

const ADD_USER = gql`
  mutation AddUser ($username: String!,$password: String!,$drug: Int!){
    signup(username:$username,password:$password,drug:$drug){
      token
      user {
        id
      }
    }
  }
`

function Register() {

  const [signup,{data}]=useMutation(ADD_USER); 
  const dispatch = useUserDispatch();

  const [fields, setFields] = useState({

    username: null,
    password: null,
    confirmpassword: null,
    drug: 1,

  });

  const [errorMessages,setErrorMessages]=useState([]);

  let history = useHistory();

  useEffect(()=>{
    if(data){
      dispatch({type: "setUser", value: {username: fields.username,token: data.signup.token,userid: data.signup.user.id }});
      history.push("/home");
    }
  },[data]);

  const handleSubmit = ()=> {

    let errors = [];

    if(fields.username == null || fields.username.length <= 3){
      errors.push("username too short");
    }

    if(fields.password == null || fields.password.search(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/) === -1 ){
      errors.push("password empty or not long/complex enough");
    }

    if(fields.password !== fields.confirmpassword){
      errors.push("passwords don't match");
    }

    if(errors.length === 0){
      signup({
        variables: fields
      });
      
    }else{
      setErrorMessages(errors);
    }
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
      <ul>
        {errorMessages.map(e => <li>{e}</li>)}
      </ul>
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
            <input type="password" className="form-control" name="passwordconfirmation" id="passwordconfirmation" placeholder="Wachtwoord confirmatie" onChange={event=>setField(event,"confirmpassword")}/>
          </div>
          <label for="drugs">Choose a drug:</label>
          <select name="drugs" id="drugs" onChange={event=>{setField(event,"drug")}}>
            <option value="1">wiet</option>
            <option value="2">coke</option>
            <option value="3">alcohol</option>
          </select>
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