import React from "react";
//import './App.css';
//import '.
import opdrachtenicon from "../SVG/opdrachten-icon.svg";
import diaryicon from "../SVG/diary-icon.svg";
import noodknopicon from "../SVG/noodknop-icon.svg";
import achievementicon from "../SVG/achievement-icon.svg";
import "../css/stylechloe.css";
//import './scale.js';

import Level from "../components/Level";
import Register from "../components/navigator";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="base-container">
      <header>
        <Level />
      </header>
      <div class="maindash">
        <a onClick={() => history.push("/opdrachten")}>
          <button class="dash" id="opdrachten">
            <div class="inhoud">
              <img src={opdrachtenicon} alt="opdrachten" class="icons" />
              <p> Opdrachten</p>
            </div>
          </button>
        </a>
        <a onClick={() => history.push("/diarymenu")}>
          <button class="dash" id="dagboek">
            <div class="inhoud">
              <img src={diaryicon} alt="opdrachten" class="icons" id="dag" />
              <p> Dagboek</p>
            </div>
          </button>
        </a>
        <a onClick={() => history.push("/noodknopmain")}>
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <img src={noodknopicon} alt="opdrachten" class="icons" />
              <p> Noodknop</p>
            </div>
          </button>
        </a>
        <a onClick={() => history.push("/achievements")}>
          <button class="dash" id="achievements">
            <div class="inhoud">
              <img
                src={achievementicon}
                alt="opdrachten"
                class="icons"
                id="achieve"
              />
              <p> Achievements</p>
            </div>
          </button>
        </a>
      </div>
      <Register />
    </div>
  );
}

export default Home;
