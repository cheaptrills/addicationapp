import React from "react";
//import './App.css';
import "../css/stylejonas.css";
import Level from "../components/Level";
import backbutton from "../SVG/back-button.svg";

import arrow from "../SVG/arrow.svg";
import Register from "../components/navigator";
import Tags from "../components/Metatags";
import { useHistory } from "react-router-dom";

function NoodknopPsy() {
  const history = useHistory();

  return (
  

      <div id="scale" className="gradient">
        <div class="start">
          <a onClick={() => history.push("/noodknopmain")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>
        <Level />
        <div class="noodknop-psy-box1">
          <svg class="noodknop-psy-vierkant">
            <input type="button" class="noodknop-psy-vierkant" onClick="" />
          </svg>
          <div class="noodknop-psy-text1">
            <span>Geert van reussel</span>
          </div>
          <div class="noodknop-psy-text2">
            <span>
              Antwerpsesteenweg 66
              <br />
              2800 Mechelen
              <br />
              0489/294719
            </span>
          </div>
          <div class="noodknop-psy-text3">
            <span>
              gespecialiseerd in: <br />
              gedragspsychologie
            </span>
          </div>
        </div>
        <div class="noodknop-psy-box2">
          <svg class="noodknop-psy-vierkant">
            <input type="button" class="noodknop-psy-vierkant" onClick="" />
          </svg>
          <div class="noodknop-psy-text1">
            <span>Geert van reussel</span>
          </div>
          <div class="noodknop-psy-text2">
            <span>
              Antwerpsesteenweg 66
              <br />
              2800 Mechelen
              <br />
              0489/294719
            </span>
          </div>
          <div class="noodknop-psy-text3">
            <span>
              gespecialiseerd in: <br />
              gedragspsychologie
            </span>
          </div>
        </div>

        <Register />
      </div>
  );
}

export default NoodknopPsy;
