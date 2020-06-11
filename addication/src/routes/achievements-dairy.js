import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import './scale.js';




import dagboek from "../SVG/dagboek.svg";
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
//import Level from  '../components/Level';
import Register from '../components/navigator';
//import scaling from '../components/scale';
import AutoScale from 'react-auto-scale';





function achievementsDairy() {

  return (



    <div id="scale" className="gradient">

		

		


<AutoScale>



   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

	<div id="Group_21">
		<div class="opdracht1">
	
		</div>

		<div id="Wandeling_maken">
			<a href="#">dagboek lezen</a>
		</div>
	
	</div>
	
		<div id="Group_24">
	
	</div>



	<div id="Group_25">
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

	</AutoScale>

	</div>
   
    




	
    

  );
}

export default achievementsDairy;