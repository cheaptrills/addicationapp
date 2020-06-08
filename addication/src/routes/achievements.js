import React from 'react';
//import './App.css';
import '../css/stylejonas.css';


import award from "../SVG/award.svg";
import dagboek from "../SVG/dagboek.svg";
import gestopt from "../SVG/gestopt.svg";
import happy from "../SVG/happy.svg";
import arrow from "../SVG/arrow.svg";





function achievements() {

  return (

    <div id="scale" className="gradient">
   
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