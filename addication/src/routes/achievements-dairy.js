import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../scale/scale.js';




import dagboek from "../SVG/dagboek.svg";
import arrow from "../SVG/arrow.svg";
import Level from  '../components/Level';
import Register from '../components/navigator';
import Tags from '../components/Metatags';






function achievementsDairy() {

  return (

	<div>


	<Tags/>



    <div  id="scale">

	

		




   
   <a href="#"><img class="arrow" src={arrow}></img></a>

   <Level/>
	

	<div id="achievements-box-1">
		<div class="opdracht1">
	
		</div>

		<div id="Wandeling_maken">
			<a href="#">dagboek lezen</a>
		</div>
	
	</div>
	
		<div id="achievements-box-2">
	
	</div>



	<div id="achievements-box-3">
		<div id="Group_17">
			<div class="opdracht2">
				
			</div>
			
		</div>
	
		
	</div>





	<div class="levelbox">
		
	</div>

	<div id="Level_1">
		<span>Dagboek</span>
	</div>
	<img id="award" src={dagboek} ></img>
	
	

	<Register />




	</div>

	</div>
   
    




	
    

  );
}

export default achievementsDairy;