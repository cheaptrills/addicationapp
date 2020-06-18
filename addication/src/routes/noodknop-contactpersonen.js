import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import Plus1 from "../SVG/plus1.svg";
import arrow from "../SVG/arrow.svg";
import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";

function NoodknopContactpersonen() {
  return (
    <div>
      <Tags />

      <div id="scale" className="gradient">
        <a href="#">
          <img class="arrow" src={arrow}></img>
        </a>

        <Level />
        <div class="noodknop-contact-button1">
          <div class="noodknop-babbel-vierkant">
            <input
              type="button"
              value="Mama"
              class="noodknop-babbel-vierkant"
              onClick=""
            />
          </div>
        </div>

        

        <img id="plus1" src={Plus1}></img>

        <Register />
      </div>
    </div>
  );
}

export default NoodknopContactpersonen;
