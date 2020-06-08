import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../css/stylechloe.css';


import award from "../SVG/award.svg";
import dagboek from "../SVG/dagboek.svg";
import gestopt from "../SVG/gestopt.svg";
import happy from "../SVG/happy.svg";
import arrow from "../SVG/arrow.svg";
import level3 from "../SVG/level3.svg";
import level4 from "../SVG/level4.svg";
import level5 from "../SVG/level5.svg";
import level6 from "../SVG/level6.svg";
import level7 from "../SVG/level7.svg";
import level8 from "../SVG/level8.svg";
import levelbalk from "../SVG/level-balk.svg";
import levelaanduiding from "../SVG/level-aanduiding.svg";





function achievements() {

  return (

    <div id="scale" className="gradient">



<header>
          <div class="levelsheader"> 
              <img src={level2} class="lev"/> 
              <img src={level3} class="lev"/>
              <img src={level4} class="lev"/>
              <img src={level5} class="lev"/>
              <img src={level6} class="lev"/>
              <img src={level7} class="lev"/>
              <img src={level8} class="lev"/>
          </div>
          <br />
          <div class="currentlevel">
            <img src={level1} class="level"/>
            <img src={levelbalk} class="levelbalk"/>
            <img src={levelaanduiding} class="levelaanduid"/>
            <img src={levelaanduiding} class="levelaanduid1"/>
          </div>
        </header>
   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	<div class="level">

	 <input type="button" value="" id="button" onClick="" />    
	    
	    
	    
	</div>
	
	 <div id="Level">
		<p>Level</p>
	</div>
	<img class="award" src={award}></img>
	
	
		<div class="mood">
	
	 <input type="button" value="" id="button" onClick="" />   
		
	</div>
	

	
	<div id="Mood">
		<p>Mood</p>
	</div>
	<img id="happy1" src={happy} ></img>
	
	
		
	
	<div class="dagboek">``
	
	 <input type="button" value="" id="button" onClick="" />   


		
	</div>
	
	
	<div id="Dagboek">
		<p>Dagboek</p>
		
		
	</div>
	<img id="dagboek" src={dagboek} ></img>
	
	
		<div class="gestopt">
		
		 <input type="button" value="" id="button" onClick="" />   

	</div >
	
	
	<div id="Gestopt">
		<p>Gestopt</p>
	</div>
	<img id="hand1" src={gestopt} ></img>
	

	
	
	
	

	
   
    


    </div>

  );
}

export default achievements;