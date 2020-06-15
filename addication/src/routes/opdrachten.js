import React from 'react';
//import './App.css';
//import './chloestyle.css';

function Opdrachten() {

  return (
    <div className="base-container">
         <header>
    <div class="start"> 
       <a href="dashboard.html"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
        <p class="title"> OPDRACHTEN </p>
    
    </div>
    
     <br />
      <div class="currentlevel">
      <img src="SVG/level1.svg" class="level"/>
       <img src="SVG/level-balk.svg" class="levelbalk"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
       
       </div>
   </header>
       <div class="maindash"> 
       <a href="opdracht-keuze.html">
     <button class="dash" id="opdrachten"> 
     <div class="inhoud">
      
      <p> KIES OPDRACHT</p>
      </div>
     </button>
      </a>
      
      <a href="medailles-opdracht.html">
      <button class="dash" id="dagboek"> 
      <div class="inhoud">
     
      <p> MEDAILLES</p>
          </div>
     </button>
      </a> 
      
      <a href="opdracht-hulp.html"> 
       <button class="dash" id="noodknop"> 
       <div class="inhoud">
      <img src="SVG/hulp-icon.svg" alt="hulp" class="hulpicon"/>
      <p> HULP</p>
           </div>
     </button>
       </a>
       
      
 
   </div>
    
      </div>
    );
}

export default Opdrachten;