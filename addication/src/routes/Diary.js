import React, {useState, useContext} from 'react';
import CurrentLevel from '../components/CurrentLevel';
import backbutton from "../SVG/back-button.svg";
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo';


//import './App.css';
const GET_DIARIES = gql
`{
  diaries( userID:"5ede2e9dc50f7022e0fad488" ) {
    title
  }
}`;

function Diary() {

  const history = useHistory();

  const{
    loading, error, data 
 }= useQuery(GET_DIARIES);

 if(loading) return <h4>loading</h4>
 if(error) console.log(error);
 //console.log(data);

  return (
  <div>
    <header>
      <div class="start"> 
        <a onClick={()=>history.push("/diarymenu")}> 
          <img src={backbutton} alt="terugknop" class="terugknop"/>
        </a>
      </div>
      <br />
      <CurrentLevel />
    </header>
    <div class="maindash"> 
      {
        data.diaries.map(diary => (
          <a href="/diaryread">
            <button class="dash" id="opdrachten"> 
              <div class="inhoud">
                <p class="dag">{diary.title}</p>
              </div>
            </button>
          </a>
          )) 
        }
    </div>
  </div>

  );

    
}

export default Diary;