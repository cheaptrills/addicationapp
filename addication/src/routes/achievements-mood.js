import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import happy from "../SVG/happy.svg";
import arrow from "../SVG/arrow.svg";

import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";

function achievementsMood() {
  return (
    <div>
      <Tags />
      <div id="scale">
        <a href="#">
          <img class="arrow" src={arrow}></img>
        </a>

        <Level />
        <div id="achievements-box-1">
          <div class="opdracht1"></div>
        </div>

        <div id="achievements-box-2"></div>

        <div id="achievements-box-3">
          <div class="opdracht2"></div>
        </div>

        <div id="gemiddelde">
          <span>gemiddelde</span>
        </div>
        <img id="happy1_bjk" src={happy}></img>

        <div class="levelbox"></div>

        <div id="Level_1">
          <span>mood</span>
        </div>
        <img id="award" src={happy}></img>

        <Register />
      </div>
    </div>
  );
}

export default achievementsMood;
