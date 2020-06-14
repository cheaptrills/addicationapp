import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import arrow from "../SVG/arrow.svg";

import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";

function NoodknopHulp() {
  return (
    <div>
      <Tags />
      <div id="scale" className="gradient">
        <a href="#">
          <img class="arrow" src={arrow}></img>
        </a>

        <div class="mood-opdrachten">
          <div id="DRANG_TERUGVAL">
            <span>HULP</span>
          </div>
        </div>

        <div class="terugval-box-2">
          <div class="noodsituatie-rect-box"></div>
        </div>
        <div id="noodsituatie-text-in-box">
          <span>
            Om het dagboek in te vullen tap je gewoon op de button. Elke nieuwe
            dag kan je terug het dagboek + de moodslider invullen. Je kan per
            dag deze maar 1 keer invullen. We raden aan de moodslider in de loop
            van de dag in te vullen + het dagboek 's avonds!
          </span>
        </div>
        <div class="noodsituatie-button">
          <input type="button" value="BEGREPEN" id="BEL_DRUGLIJN" onClick="" />
        </div>

        <Register />
      </div>
    </div>
  );
}

export default NoodknopHulp;
