import React from 'react';
//import './App.css';
//import '.
import level1 from "../SVG/level1.svg";
import level2 from "../SVG/level2.svg";
import level3 from "../SVG/level3.svg";
import level4 from "../SVG/level4.svg";
import level5 from "../SVG/level5.svg";
import level6 from "../SVG/level6.svg";
import level7 from "../SVG/level7.svg";
import level8 from "../SVG/level8.svg";
import levelbalk from "../SVG/level-balk.svg";
import levelaanduiding from "../SVG/level-aanduiding.svg";
import opdrachtenicon from "../SVG/opdrachten-icon.svg";
import diaryicon from "../SVG/diary-icon.svg";
import noodknopicon from "../SVG/noodknop-icon.svg";
import achievementicon from "../SVG/achievement-icon.svg";
import '../css/stylejonas.css';
import '../css/stylechloe.css';
import './scale.js';

function Home() {

  return (

    <div id="scale" className="gradient">
    <div className="base-container">
        <header>
          <div class="levelsheader"> 
              <img src={level2} class="lev"/> 
              <img src={level3} class="lev"/>
              <img src={level4} class="lev"/>
              <img src={level5} class="lev"/>
              <img src={level6} class="lev"/>
              <img src={level7} class="lev"/>
              <img src={level8} class="lev"/>
          </div>
          <br />
          <div class="currentlevel">
            <img src={level1} class="level"/>
            <img src={levelbalk} class="levelbalk"/>
            <img src={levelaanduiding} class="levelaanduid"/>
            <img src={levelaanduiding} class="levelaanduid1"/>
          </div>
        </header>
       <div class="maindash"> 
       <a href="opdrachten.html">
     <button class="dash" id="opdrachten"> 
     <div class="inhoud">
      <img src={opdrachtenicon} alt="opdrachten" class="icons"/>
      <p> Opdrachten</p>
      </div>
     </button>
      </a>
      
      <a href="dagboek.html">
      <button class="dash" id="dagboek"> 
      <div class="inhoud">
      <img src={diaryicon} alt="opdrachten" class="icons" id="dag"/>
      <p> Dagboek</p>
          </div>
     </button>
      </a> 
      
      <a href="noodknop.html"> 
       <button class="dash" id="noodknop"> 
       <div class="inhoud">
      <img src={noodknopicon} alt="opdrachten" class="icons"/>
      <p> Noodknop</p>
           </div>
     </button>
       </a>
       
       <a href="achievements.html">
       <button class="dash" id="achievements"> 
       <div class="inhoud">
      <img src={achievementicon} alt="opdrachten" class="icons" id="achieve"/>
      <p> Achievements</p>
           </div>
     </button>
         </a>
 
   </div>
      </div>
      </div>
    );
}

export default Home;