import React from 'react';
//import './App.css';
//import './chloestyle';
import CurrentLevel from "../components/CurrentLevel";
import backbutton from "../SVG/back-button.svg";

function DiaryMenu() {

  return (
      /*hier komt header en level */
    <div className="base-container">
      <header>
        <div class="start"> 
          <a href="dashboard.html"> 
            <img src={backbutton} alt="terugknop" class="terugknop"/>
          </a>
          <p class="title"> DAGBOEK </p>
        </div>
        <br/>
        <CurrentLevel />
      </header>
      <div class="maindash"> 
        <a href="dagboek-vulin.html">
          <button class="dash" id="opdrachten"> 
            <div class="inhoud">
              <p> VUL DAGBOEK IN</p>
            </div>
          </button>
        </a>
        <a href="dagboek-moodslider.html">
          <button class="dash" id="dagboek"> 
            <div class="inhoud">
            <p> MOODSLIDER</p>
            </div>
          </button>
        </a> 
        <a href="dagboek-lezen.html">
          <button class="dash" id="dagboek"> 
            <div class="inhoud">
              <p> DAGBOEK LEZEN</p>
            </div>
          </button>
        </a> 
        <a href="dagboek-hulp.html"> 
          <button class="dash" id="noodknop"> 
            <div class="inhoud">
              <img src="SVG/hulp-icon.svg" alt="hulp" class="hulpicon"/>
              <p> HULP</p>
            </div>
          </button>
        </a>
      </div>
    </div>
    );
}

export default DiaryMenu;