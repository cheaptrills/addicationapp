import React from "react";
import "../css/stylejonas.css";

//import './App.css';
import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";
import CurrentLevel from "../components/CurrentLevel";
import { useHistory } from "react-router-dom";
import backbutton from "../SVG/back-button.svg";


function NoodknopHulp() {
  const history = useHistory();

  return (
    <div>
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
              Om het dagboek in te vullen tap je gewoon op de button. Elke
              nieuwe dag kan je terug het dagboek + de moodslider invullen. Je
              kan per dag deze maar 1 keer invullen. We raden aan de moodslider
              in de loop van de dag in te vullen + het dagboek 's avonds!
            </p>
          </div>
        </button>

        <div class="form__field">
          <a onClick={() => history.push("/noodknopmain")} class="hulpbtn">
            BEGREPEN
          </a>
        </div>
      </div>

      <Register />
    </div>
  );
}

export default NoodknopHulp;
