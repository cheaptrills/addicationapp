import React from "react";
//import './App.css';
import "../css/stylejonas.css";
import backbutton from "../SVG/back-button.svg";

import Question from "../SVG/question.svg";
import arrow from "../SVG/arrow.svg";
import Register from "../components/navigator";
import Tags from "../components/Metatags";
import Level from "../components/Level";
import { useHistory } from "react-router-dom";

function Noodknop() {
  const history = useHistory();

  return (
    <div>
      <Tags />
      <div id="scale" className="gradient">
        <div class="start">
          <a onClick={() => history.push("/home")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>
        <Level />
        <a onClick={() => history.push("/noodknopnoodsituatie")}>
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <p> Noodsituatie </p>
            </div>
          </button>
        </a>

        <a onClick={() => history.push("/noodknoppsychologen")}>
          <button class="dash" id="noodknop">
            <div class="inhoud">
              <p> psychologen </p>
            </div>
          </button>
        </a>

        <a onClick={() => history.push("/noodknophulp")}>
          <button class="dash" id="help">
            <div class="inhoud">
              <img
                src={Question}
                alt="opdrachten"
                class="icons"
                id="question"
              />
              <p> Hulp</p>
            </div>
          </button>
        </a>

        <a onClick={() => history.push("/noodknophulp")}>
          <button class="dash" id="help">
            <div class="inhoud">
              <p> contactpersonen</p>
            </div>
          </button>
        </a>

        <Register />
      </div>
    </div>
  );
}

export default Noodknop;
