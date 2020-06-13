import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../scale/scale.js';





import gestopt from "../SVG/gestopt.svg";
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





function achievementsQuit() {

  return (

    <div id="scale" >







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

	<div id="achievements-box-1">
		<div class="opdracht1">
	
		</div>

		<div id="Wandeling_maken">
			<span>2 dagen</span>
		</div>
	
	</div>
	
		<div id="achievements-box-2">
	
	</div>




	
		






	<div class="levelbox">
		
	</div>

	<div id="Level_1">
		<span>Gestopt</span>
	</div>
	<img id="award" src={gestopt} ></img>
	
	

	<Register />
   
    


    </div>

  );
}

export default achievementsQuit;