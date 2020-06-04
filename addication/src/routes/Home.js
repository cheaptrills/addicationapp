import React from 'react';
//import './App.css';
//import './

function Home() {

  return (
    <div className="base-container">
        <header>
     <div class="levelsheader"> 
         <img src="SVG/level2.svg" class="lev"/> 
         <img src="SVG/level3.svg" class="lev"/>
         <img src="SVG/level4.svg" class="lev"/>
         <img src="SVG/level5.svg" class="lev"/>
         <img src="SVG/level6.svg" class="lev"/>
         <img src="SVG/level7.svg" class="lev"/>
         <img src="SVG/level8.svg" class="lev"/>
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
       <a href="opdrachten.html">
     <button class="dash" id="opdrachten"> 
     <div class="inhoud">
      <img src="SVG/opdrachten-icon.svg" alt="opdrachten" class="icons"/>
      <p> Opdrachten</p>
      </div>
     </button>
      </a>
      
      <a href="dagboek.html">
      <button class="dash" id="dagboek"> 
      <div class="inhoud">
      <img src="SVG/diary-icon.svg" alt="opdrachten" class="icons" id="dag"/>
      <p> Dagboek</p>
          </div>
     </button>
      </a> 
      
      <a href="noodknop.html"> 
       <button class="dash" id="noodknop"> 
       <div class="inhoud">
      <img src="SVG/noodknop-icon.svg" alt="opdrachten" class="icons"/>
      <p> Noodknop</p>
           </div>
     </button>
       </a>
       
       <a href="achievements.html">
       <button class="dash" id="achievements"> 
       <div class="inhoud">
      <img src="SVG/achievement-icon.svg" alt="opdrachten" class="icons" id="achieve"/>
      <p> Achievements</p>
           </div>
     </button>
       
         </a>
 
   </div>
      </div>
    );
}

export default Home;