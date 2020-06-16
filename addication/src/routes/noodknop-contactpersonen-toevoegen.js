import React from "react";
//import './App.css';
import "../css/stylejonas.css";

import Plus1 from "../SVG/plus1.svg";
import arrow from "../SVG/arrow.svg";
import Level from "../components/Level";
import Register from "../components/navigator";
import Tags from "../components/Metatags";

function NoodknopContactpersonenToevoegen() {
  return (
    <div>
      <Tags />

      <div id="scale" className="gradient">
        <a href="#">
          <img class="arrow" src={arrow}></img>
        </a>

        <Level />
        <form action="/action_page.php">
          <div class="noodknop-contact-button1">
            <div class="noodknop-babbel-vierkant">
              <input
                type="text"
                name="add_contact_name"
                class="add-contact-input"
                placeholder="naam"
              />
            </div>
          </div>

          <div class="noodknop-contact-button2">
            <div class="noodknop-babbel-vierkant">
              <input
                type="text"
                name="add_contact_number"
                class="add-contact-input"
                placeholder="telefoonnummer"
              />
            </div>
          </div>

          <div class="dottedborder"></div>

          <img id="plus1" src={Plus1}></img>

          <div id="OPSLAAN">
            <input type="submit" value="OPSLAAN" />
          </div>
        </form>

        <Register />
      </div>
    </div>
  );
}

export default NoodknopContactpersonenToevoegen;
