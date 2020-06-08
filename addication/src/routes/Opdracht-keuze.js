import React from 'react';
//import './App.css';
//import './chloestyle.css';
function Opdrachtkeuze() {

  return (
    <div className="base-container">
      <header>
        <div class="start"> 
          <a href="dashboard.html"> 
            <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
          </a> 
        </div>
        <br>
        <div class="currentlevel">
          <img src="SVG/level1.svg" class="level"/>
          <img src="SVG/level-balk.svg" class="levelbalk"/>
          <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
          <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
        </div>
      </header>
      
      <div class="maindash"> 
        <a href="opdracht-uitleg.html">
          <button class="dash" id="opdrachten"> 
            <div class="inhoud">
              <p class="moeilijkheidsgraad"> Moeilijkheid: + of ++</p>
              <p> Hier komt de titel van de opdracht</p>
            </div>
          </button>
        </a>
        <a href="opdracht-uitleg.html">
          <button class="dash" id="opdrachten"> 
          <div class="inhoud">
            <p class="moeilijkheidsgraad"> Moeilijkheid: + of ++</p>
            <p> Hier komt de titel van de opdracht</p>
          </div>
          </button>
        </a> 
      </div>
    </div>
    );
}

export default Opdrachtkeuze;