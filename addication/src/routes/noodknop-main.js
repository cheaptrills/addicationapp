import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import Question from "../SVG/question.svg";
import arrow from "../SVG/arrow.svg";
import Register from "../components/navigator";
import Tags from "../components/Metatags";
import Level from "../components/Level";

function Noodknop() {
  return (
    <div>
      <Tags />

      <div id="scale" className="gradient">
        <a href="#">
          <img class="arrow" src={arrow}></img>
        </a>
        <Level />

        <div id="NOODKNOP">
          <span>NOODKNOP</span>
        </div>
        <div class="box1">
          <div class="noodsituatie">
            <input
              type="button"
              value="NOODSITUATIE"
              class="noodsituatie"
              onClick=""
            />
          </div>
        </div>

        <div class="box2">
          <div class="psychologen">
            <input
              type="button"
              value="PSYCHOLOGEN"
              class="psychologen"
              onClick=""
            />
          </div>
        </div>

        <div id="box3">
          <div class="hulp">
            <input type="button" value="HULP" class="hulp" onClick="" />
          </div>
          <img id="question" src={Question}></img>
        </div>

        <div id="box4">
          <div class="contactpersonen">
            <input
              type="button"
              value="CONTACTPERSONEN"
              class="contactpersonen"
              onClick=""
            />
          </div>
        </div>

        <Register />
      </div>
    </div>
  );
}

export default Noodknop;
