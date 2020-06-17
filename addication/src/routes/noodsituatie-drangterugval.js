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
            Hey hold on! Keep up the good work...
            Heb je het gevoel dat je sterk terugvalt? 
            Hier zijn enkele tips:
            1. Terugval is zeer normaal
            2. Doe een opdracht mocht je deze nog niet gedaan hebben
            3. Contacteer iemand in je contacten om te gamen of te wandelen
            4. Eet iets
            5. Contacteer de druglijn
            </p>
          </div>
        </button>

        <div class="form__field">
          <a href="tel:078 15 10 20" class="hulpbtn">
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
