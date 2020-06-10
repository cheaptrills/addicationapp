import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../css/stylechloe.css';
import './scale.js';


import award from "../SVG/award.svg";
import dagboek from "../SVG/dagboek.svg";
import gestopt from "../SVG/gestopt.svg";
import happy from "../SVG/happy.svg";
import arrow from "../SVG/arrow.svg";
import level1 from "../SVG/level1.svg";
import level2 from "../SVG/level2.svg";
import level3 from "../SVG/level3.svg";
import level4 from "../SVG/level4.svg";
import level5 from "../SVG/level5.svg";
import level6 from "../SVG/level6.svg";
import level7 from "../SVG/level7.svg";
import level8 from "../SVG/level8.svg";
import levelbalk from "../SVG/level-balk.svg";
import levelaanduiding from "../SVG/level-aanduiding.svg";
import Level from  '../components/Level';





function Achievements() {

  return (

    <div id="scale" className="gradient">


<Level />




   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	<div class="level">

	 <input type="button" value=""  onClick="" />    
	    
	    
	    
	</div>
	
	 <div id="Level">
		<p>Level</p>
	</div>
	<img class="award" src={award}></img>
	
	
		<div class="mood">
	
	 <input type="button" value="" onClick="" />   
		
	</div>
	

	
	<div id="Mood">
		<p>Mood</p>
	</div>
	<img id="happy1" src={happy} ></img>
	
	
		
	
	<div class="dagboek2">``
	
	 <input type="button" value=""  onClick="" />   


		
	</div>
	
	
	<div id="Dagboek">
		<p>Dagboek</p>
		
		
	</div>
	<img id="dagboek" src={dagboek} ></img>
	
	
		<div class="gestopt">
		
		 <input type="button" value="" onClick="" />   

	</div >
	
	
	<div id="Gestopt">
		<p>Gestopt</p>
	</div>
	<img id="hand1" src={gestopt} ></img>
	

	
	
	


	
   
    


    </div>

  );
}

export default Achievements;