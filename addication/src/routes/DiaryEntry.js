import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CurrentLevel from "../components/CurrentLevel";
import backbutton from "../SVG/back-button.svg";

import {useUserDispatch, useUserState} from "../context/UserContext";
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";
import Register from "../components/navigator";



//import './App.css';
//import './chloestyle.css';

const ADDDIARY = gql`
  mutation addDiary ($title: String!,$entry: String!,$userID: String!){
    addDiary(title:$title,entry:$entry,userID: $userID){
      title
    }
  }
`

function DiaryEntry() {

  const [addDiary,{data}]=useMutation(ADDDIARY); 
  const state = useUserState();

  const [fields, setFields] = useState({
    created: null,
    title: null,
    entry: null,
    userID: null,
    used: null,

  });

  const [errorMessages,setErrorMessages]=useState([]);

  let history = useHistory();

  useEffect(()=>{
    if(data){
      //dispatch({type: "setDiary", value: {username: fields.username,token: data.login.token,userid: data.login.user.id }});
      history.push("/Diary");
    }
  },[data]);

  const clicked = () => {
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true){
      fields.used = 1;
    } 
  }
  const handleSubmit = () => {

    let errors = [];

    if (fields.title == null) {
      errors.push("Geef een titel in");
      return null;
    }

    if (fields.entry == null ) {
      errors.push("Vul je dagboek met wat meer woorden");
      return null;
    }

    if(errors.length === 0){
      console.log(state.user);
      addDiary({
        variables: {...fields,userID:state.user.userid}
      });
      
    }else{
      setErrorMessages(errors);
    }
  }

  const setField = ({ target }, field) => {
    let oldFields = fields;
    oldFields[field] = target.value;
    setFields(oldFields);
  };

  return (
    <div>
      <header>
        <div class="start">
          <a onClick={() => history.push("/diarymenu")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>
        <br />
        <CurrentLevel />
      </header>

      <div class="maindash">
        <section class="dash1" id="opdrachten">
          <div class="inhouddagboek">
            <h2 id="vulin"> Dag #</h2>
            <div>
              <textarea
                id="titeldagboek"
                name="titeldagboek"
                placeholder="Titel"
                rows="1"
                cols="10"
                onChange={event=>setField(event,"title")}
              ></textarea>
              <br />
              <textarea
                id="textdagboek"
                name="tekstdagboek"
                placeholder="Vul het dagboek in"
                rows="10"
                cols="30"
                onChange={event=>setField(event,"entry")}
              ></textarea>
              <br />

              <div class="gebruik">
                <input
                  type="checkbox"
                  id="myCheck"
                  name="gebruikt"
                  value="niet gebruikt"
                  onChange={clicked}
                />
                Ik heb vandaag niet gebruikt
              </div>

              <div class="form__field">
                <input type="submit" value="OK" class="ok" onClick={handleSubmit}/>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Register />
    </div>
  );
}

export default DiaryEntry;
