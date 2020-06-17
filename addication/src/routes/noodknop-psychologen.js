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
        <button class="dash1" id="opdrachten">
          <div class="inhoudopdracht">
            <h2 id="hulp"> Recommended </h2>
            <p class="uitleg">
            Geert van reussel<br />
            Antwerpsesteenweg 66<br />
            2800 Mechelen<br />
            0489/294719<br />
            <br /><br />
            gespecialiseerd in:<br />
            gedragspsychologie<br />
            </p>
          </div>
        </button>
        <button class="dash1" id="opdrachten">
          <div class="inhoudopdracht">
            <h2 id="hulp">  </h2>
            <p class="uitleg">
            Jill van Aartselaar<br />
            Lange Vlierstraat<br />
            2018 Mechelen<br />
            0475/492764<br />
            <br /><br />
            gespecialiseerd in:<br />
            drug misbruik<br />
            </p>
          </div>
        </button>

        <Register />
      </div>
  );
}

export default NoodknopPsy;
