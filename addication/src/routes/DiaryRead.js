import React from 'react';
//import './App.css';
import CurrentLevel from '../components/CurrentLevel';
import backbutton from "../SVG/back-button.svg";

import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { useHistory } from 'react-router-dom';


const GET_DIARY = gql
  `{
  diary( _id :"5ee233ecc654b537a89361df" ) {
    title
    entry
  }
}`;

function DiaryRead() {
  let history = useHistory();

  const {
    loading, error, data
  } = useQuery(GET_DIARY);

  if (loading) return <h4>loading</h4>
  if (error) console.log(error);
  console.log(data);

  return (
    <div className="base-container">
      <header>
        <div class="start">
          <a onClick={()=>history.push("/diary")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>
        <br />
        <CurrentLevel />
      </header>
      <div class="maindash">
        <button class="dash1" id="opdrachten">
          <div class="inhoudopdracht">
            <h2 id="hulp"> {data.diary.title} </h2>
            <p class="uitleg">
              {data.diary.entry}
            </p>

          </div>
        </button>

      </div>

    </div>
  );
}

export default DiaryRead;