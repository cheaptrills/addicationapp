import React from 'react';
//import './App.css';
import './chloestyle.css';
function DiaryRead() {

  return (
    <div className="base-container">
        <header>
    <div class="start"> 
       <a href="diary.js"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
    </div>
    
     <br/>
      <div class="currentlevel" /*hier komt include van level */>
      <img src="SVG/level1.svg" class="level"/>
       <img src="SVG/level-balk.svg" class="levelbalk"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
       
       </div>
   </header>
    
       <div class="maindash"> 
       
     <button class="dash1" id="opdrachten"> 
     <div class="inhoudopdracht">
      <h2 id="hulp"> DAG 1 </h2>
      <p class="uitleg"> 
      
      Hier komt de input van de gebruiker die dag van het dagboek
      </p>
      
      </div>
     </button>
 
   </div>

      </div>
    );
}

export default DiaryRead;