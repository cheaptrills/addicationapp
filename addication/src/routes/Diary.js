import React, { useState, useContext } from "react";
import CurrentLevel from "../components/CurrentLevel";
import backbutton from "../SVG/back-button.svg";
import { useHistory } from "react-router-dom";
import {useUserState} from "../context/UserContext";


import gql from "graphql-tag";
import { useQuery } from "react-apollo";

const GET_DIARIES = gql`
  query Diaries($userid: String){
    diaries(userID: $userid){
      title
    }
  }
`;

function Diary() {
  const history = useHistory();
  const {user} = useUserState();

  const { loading, error, data } = useQuery(GET_DIARIES,{
    variables: {
      userid: user.id
    }
  });

  if (loading) return <h4>loading</h4>;
  if (error) console.log(error);

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
        {data.diaries.map((diary) => (
          <a href="/diaryread">
            <button class="dash" id="opdrachten">
              <div class="inhoud">
                <p class="dag">{diary.title}</p>
              </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Diary;
