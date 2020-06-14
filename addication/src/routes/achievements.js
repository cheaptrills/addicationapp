import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../css/stylechloe.css';




import award from "../SVG/award.svg";
import dagboek from "../SVG/dagboek.svg";
import gestopt from "../SVG/gestopt.svg";
import happy from "../SVG/happy.svg";
import arrow from "../SVG/arrow.svg";
import Register from '../components/navigator';
import Tags from '../components/Metatags';
import Level from  '../components/Level';







function Achievements() {

  return (


	<div id="wrapper">


		<Tags/>


    <div id="scale" >


	<header>
        <Level />
      </header>




   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	<div class="level-jonas">

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
	

	
	
	


	
	<Register />
    


    </div>
	</div>
  );
}

export default Achievements;