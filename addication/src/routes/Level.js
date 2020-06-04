import React from 'react';
//import './App.css';
//import './chloestyle.css';

function Level() {

  return (
    <div className="base-container">
        <div class="levelsheader"> 
         <img src="SVG/level2.svg" class="lev"/> 
         <img src="SVG/level3.svg" class="lev"/>
         <img src="SVG/level4.svg" class="lev"/>
         <img src="SVG/level5.svg" class="lev"/>
         <img src="SVG/level6.svg" class="lev"/>
         <img src="SVG/level7.svg" class="lev"/>
         <img src="SVG/level8.svg" class="lev"/>
     </div>
     <br/>
      <div class="currentlevel">
      <img src="SVG/level1.svg" class="level"/>
       <img src="SVG/level-balk.svg" class="levelbalk"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
       
       </div>
      </div>
    );
}

export default Level;