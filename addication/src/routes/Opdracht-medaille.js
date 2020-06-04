import React from 'react';
//import './App.css';
//import './chloestyle.css';

function Opdrachtmedaille() {

  return (
    <div className="base-container">
    <header>
    <div class="start"> 
       <a href="dashboard.html"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
        
    
    </div>
    
     <br/>
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
      <br/>
      <div class="medaille"> 
      <h3> +1</h3>
      <img src="SVG/achievement-icon.svg" alt="award" id="medailleopdracht"/> 
      
      </div>
      <h2 id="congrat">CONGRATS!!</h2>
      
      </div>
     </button>
      
     <div class="form__field">
					<input type="submit" value="VERDER" class="btnvoltooi"/>
				</div>
   
      
     
     
       
      
 
   </div>

      </div>
    );
}

export default Opdrachtmedaille;