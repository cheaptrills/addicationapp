import React from "react";
import backbutton from "../SVG/back-button.svg";
import CurrentLevel from "../components/CurrentLevel";
import { useHistory } from "react-router-dom";

//import './App.css';

function Opdrachthulp() {
  const history = useHistory();
  return (
    /* hier komt de include van header en level */
    <div className="base-container">
      <header>
        <div class="start">
          <a onClick={() => history.push("/opdrachten")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>

        <br />
        <br />

        <CurrentLevel />
      </header>

      <div class="maindash">
        <button class="dash1" id="opdrachten">
          <div class="inhoudopdracht">
            <h2 id="hulp"> Hulp </h2>
            <p class="uitleg">
              Om een opdracht te kunnen kiezen, tap je gewoon op de buttons! Je
              moet elke dag 2 verschillende opdrachten uitvoeren. In welke
              volgorde je ze doet, bepaal je zelf. Je moet deze voltooien om
              naar een hoger level te gaan. Succes!
            </p>
          </div>
        </button>

        <div class="form__field">
          <a onClick={() => history.push("/opdrachten")} class="hulpbtn">
            BEGREPEN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Opdrachthulp;
