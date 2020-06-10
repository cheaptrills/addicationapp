import React from 'react';
//import './App.css';

function Opdrachthulp() {

  return (
    /* hier komt de include van header en level */

    <div className="base-container">
        <header>
    <div class="start"> 
       <a href="dashboard.html"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
    </div>
    
     <br/>
     <br/>
     </div>
      <div class="currentlevel">
      <img src="SVG/level1.svg" class="level"/>
       <img src="SVG/level-balk.svg" class="levelbalk"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
       
       </div>
   </header>
      
      
       <div class="maindash"> 
       
        <button class="dash1" id="opdrachten"> 
        <div class="inhoudopdracht">
     
      <h2 id="hulp"> Hulp </h2>
      <p class="uitleg"> 
      
      Om een opdracht te kunnen kiezen, tap je gewoon op de buttons! Je moet elke dag 2 verschillende opdrachten uitvoeren. In welke volgorde je ze doet, bepaal je zelf. Je moet deze voltooien om naar een hoger level te gaan. Succes!
      
      </p>
      
      </div>
     </button>
      
    <div class="form__field">
                    <a href="opdrachten.js" class="hulpbtn">BEGREPEN</a>
					
				</div>
      
     
     
       
      
 
   </div>
      </div>
    );
}

export default Opdrachthulp;