import React from 'react';
//import './App.css';
//import './chloestyle';
function OPdrachtuitvoering() {

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
      
      
     
       
    <div class="check">
     <input type="checkbox" id="opdracht" name="opdracht" value="Stofzuigen" class="optie"/> Stofzuigen <br/>
     <input type="checkbox" id="opdracht" name="opdracht" value="Dwijlen" class="optie"/> Dwijlen <br/>
     <input type="checkbox" id="opdracht" name="opdracht" value="Stof afvegen" class="optie"/> Stof afvegen <br/>
    <input type="checkbox" id="opdracht" name="opdracht" value="1 kast herstructureren" class="optie"/> Kast herstructureren <br/>



     </div>
      
     <div class="form__field">
					<input type="submit" value="VOLTOOI" class="btnvoltooi"/>
				</div>
   </div>
      </div>
    );
}

export default Opdrachtuitvoering;