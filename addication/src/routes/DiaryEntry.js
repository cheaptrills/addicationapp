import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';

//import './App.css';

function DiaryEntry() {

  const [fields, setFields] = useState({

    diaryTitle: null,
    diaryEntry: null

  });


  let history = useHistory();

  const handleEntry = ()=> {
    if(fields.username == null < 2){
      alert("Geef een titel in");
      return null; 
    }
    
    if(fields.password == null || fields.password.length < 6){
      alert("Vul je dagboek met wat meer woorden");
      return null; 
    }

    history.push("/profile");
  } 

  const setField = ({target}, field) => {

    let oldFields = fields;
    oldFields[field] = target.value;
    setFields(oldFields);

  };

  return (

    <div>
        <p>
           
        </p>
    </div>
  );

    
}

export default DiaryEntry;