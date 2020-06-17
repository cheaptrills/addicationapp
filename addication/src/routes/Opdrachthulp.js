import React from "react";
import backbutton from "../SVG/back-button.svg";
import CurrentLevel from "../components/CurrentLevel";
import { useHistory } from "react-router-dom";
import Level from "../components/Level";
import Register from "../components/navigator";


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
              Net zoals bij alle andere onderdelen klik je op de onderdelen. <br />
              Bijwerkingen of wil je je voorbereiden op wat komt? <br />
              Bekijk dan zeker het bijwerkingen onderdeel. <br />
              Wil je alvast contact opnemen met professionele hulp? <br/>
              Dat vind je allemaal terug onder "psychologen" <br/>
              Heb je nood aan een babbel of wil je je contacten bijwerken <br />
              Check dan zeker de "contact" knop <br />
            </p>
          </div>
        </button>

        <div class="form__field">
          <a onClick={() => history.push("/opdrachten")} class="hulpbtn">
            BEGREPEN
          </a>
        </div>
      </div>
      <Register />
    </div>
  );
}

export default Opdrachthulp;
