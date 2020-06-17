import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import arrow from "../SVG/arrow.svg";
import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";
import { useHistory } from "react-router-dom";
import backbutton from "../SVG/back-button.svg";

function NoodknopNoodsituatie() {
  const history = useHistory();

  return (
    <div>
      <Tags />

      <div id="scale" className="gradient">
        <div class="start">
          <a onClick={() => history.push("/NOODKNOPMAIN")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>

        <Level />

        <a onClick={() => history.push("/noodsituatiedrangterugval")}>
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <p> Drang Terugval </p>
            </div>
          </button>
        </a>

        <a onClick={() => history.push("/noodsituatiebijwerkingen")}>
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <p> Bijwerkingen </p>
            </div>
          </button>
        </a>

        <a onClick={() => history.push("/noodknoppsychologen")}>
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <p> Contactpersoon </p>
            </div>
          </button>
        </a>
        <br />
        <br />
        <br />
        <a href="tel:112">
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <p> Ambulance </p>
            </div>
          </button>
        </a>

        <Register />
      </div>
    </div>
  );
}

export default NoodknopNoodsituatie;
