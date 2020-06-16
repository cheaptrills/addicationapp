import React,{useState,useEffect} from "react";
//import './App.css';
import "../css/stylejonas.css";
import "../css/stylechloe.css";
import logosvg from "../SVG/logo.svg";
import profielsvg from "../SVG/profiel.svg";
import passwordsvg from "../SVG/password.svg";
import { useHistory } from 'react-router-dom';
import {useUserDispatch} from "../context/UserContext";
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";

const LOGIN = gql`
  mutation login ($username: String!,$password: String!){
    login(username:$username,password:$password){
      token
      user {
        id
      }
    }
  }
`

function Login() {
  const [login,{data}]=useMutation(LOGIN); 
  const dispatch = useUserDispatch();

  const [fields, setFields] = useState({

    username: null,
    password: null,

  });

  const [errorMessages,setErrorMessages]=useState([]);

  let history = useHistory();

  useEffect(()=>{
    if(data){
      dispatch({type: "setUser", value: {username: fields.username,token: data.login.token,userid: data.login.user.id }});
      history.push("/home");
    }
  },[data]);

  const handleSubmit = ()=> {

    let errors = [];

    if(errors.length === 0){
      login({
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
                onChange={event=>setField(event,"username")}
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
                onChange={event=>setField(event,"password")}
              ></input>
            </div>
            <div class="form__field">
              <input type="submit" value="Login" class="btn" onClick={handleSubmit}></input>
            </div>
          </div>
          <a className="link-account" onClick={()=>history.push("/register")}>
            Heb je nog geen account?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
