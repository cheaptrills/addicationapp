import React from 'react';
//import './App.css';
import './chloestyle.css';
function Moodslider() {

  return (
    <div className="base-container">
    //hier komt de header component 
   <header>
    <div class="start"> 
       <a href="dashboard.html"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
    
    </div>
    //hier komt level
     <br/>
      <div class="currentlevel">
      <img src="SVG/level1.svg" class="level"/>
       <img src="SVG/level-balk.svg" class="levelbalk"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
       
       </div>
   </header>
      
       <div class="maindash"> 
       
     <section class="dash1" id="opdrachten"> 
    <div class="moodslider"> 
      <div class="divmood">
        <img src="SVG/bracketleft.svg" class="bracket" id="left"/> 
         <img src="SVG/smile.svg" class="mood" id="happy"/>
         <img src="SVG/neutraal.svg" class="mood" id="meh"/>
         <img src="SVG/sad.svg" class="mood" id="sad"/>
        <img src="SVG/bracketright.svg" class="bracket" id="right"/> 
        </div>
    <br/> 
       <div class="form__field">
                    <a href="startopdracht.html" class="moodoke">OK</a>
					
				</div>
    
       </div>
     </section>

    </div>
      </div>
    );
}

export default Moodslider;