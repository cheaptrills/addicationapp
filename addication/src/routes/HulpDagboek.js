import React from 'react';
//import './App.css';
import './chloestyle.css';
function HulpDagboek() {

  return (
    <div className="base-container">
        
        <header>
    <div class="start" /*hier komt header include */> 
       <a href="dashboard.html"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
    </div>
     <br/>
      <div class="currentlevel" /*hier komt de include van level*/ >
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
      Om het dagboek in te vullen, tap je op de button 'vul dagboek in. Elke dag kan je terug het dagboek eenmalig ivullen. 
      Nadat je het dagboek hebt ingevuld, vul je de moodslider in. Deze evolutie kan je bekijken onder achievements. Het is aangeraden het dagboek 's avonds en de moodslider in de loop van de dag in te vullen.
      Succes!
      </p>
      </div>
     </button>
      
    <div class="form__field">
                    <a href="opdrachten.html" class="hulpbtn">BEGREPEN</a>
	</div>
   </div>
      </div>
    );
}

export default HulpDagboek;