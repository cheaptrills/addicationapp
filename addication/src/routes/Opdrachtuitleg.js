import React from 'react';
//import './App.css';
//import './chloestyle.css';
function Opdrachtuitleg() {

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
       
     <button class="dash1" id="opdrachten"> 
     <div class="inhoudopdracht">
     
      <p class="moeilijkheid"> Moeilijkheidsgraad: + of ++</p>
      <h2> Opdracht titel</h2>
      <p class="uitleg"> Uitleg van de opdracht vb: 
      Ruim vandag je kamer op, let er zeker op dat je deze dingen gedaan hebt:</p>
      <ul> 
          <li> Stofzuigen</li>
          <li> Dwijlen</li>
          <li> Stof afvegen</li>
          <li> Minstens 1 kast herstructureren</li>
      </ul>
      </div>
     </button>
      
    <div class="form__field">
                    <a href="startopdracht.html" class="startop">START</a>
					
				</div>
      
     
     
       
      
 
   </div>
      </div>
    );
}

export default Opdrachtuitleg;