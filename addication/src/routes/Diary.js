import React, {useState, useContext} from 'react';

//import './App.css';

function Diary() {

  return (

    <header>
    <div class="start"> 
       <a href="dashboard.html"> 
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
       <a href="dagboek-leesdag.html">
     <button class="dash" id="opdrachten"> 
     <div class="inhoud">
      
      <p class="dag"> DAG 1</p>
      </div>
     </button>
      </a>
      
      <a href="dagboek-leesdag.html">
      <button class="dash" id="dagboek"> 
      <div class="inhoud">
     
      <p class="dag"> DAG 2</p>
          </div>
     </button>
      </a> 
      
      <a href="dagboek-leesdag.html">
      <button class="dash" id="dagboek"> 
      <div class="inhoud">
     
      <p class="dag"> DAG 3</p>
          </div>
     </button>
      </a> 
   </div>
  );

    
}

export default Diary;