import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import arrow from "../SVG/arrow.svg";

import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";
import { useHistory } from "react-router-dom";
import backbutton from "../SVG/back-button.svg";


function NoodknopDrangterugval() {
  const history = useHistory();

  return (
    <div>
      <Tags />

      <div id="scale">
      <div class="start">
          <a onClick={() => history.push("/noodknopnoodsituatie")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>

        <Level />

        <div class="maindash">
        <button class="dash1" id="opdrachten">
          <div class="inhoudopdracht">
            <h2 id="hulp"> Drang terugval </h2>
            <p class="uitleg">
              Stappen
            </p>
          </div>
        </button>

        <div class="form__field">
          <a onClick={() => history.push("/noodknopmain")} class="hulpbtn">
            Bel druglijn
          </a>
        </div>
      </div>

        <Register />
      </div>
    </div>
  );
}

export default NoodknopDrangterugval;
