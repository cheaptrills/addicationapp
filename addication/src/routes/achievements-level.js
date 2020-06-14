import React from 'react';
//import './App.css';
import '../css/stylejonas.css';





import award from "../SVG/award.svg";

import arrow from "../SVG/arrow.svg";

import Level from  '../components/Level';
import Register from '../components/navigator';
import Tags from '../components/Metatags';





function achievementsLevel() {

  return (

	<div>


		<Tags/>

    <div id="scale" >







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	
	<Level/>
	<div id="achievements-box-1">
		<div class="opdracht1">
	
		</div>
		<div id="Wandeling_maken">
			<span>Wandeling maken</span>
		</div>
	</div>
	
		<div id="achievements-box-2">
		<div id="Moeilijkheid____">
			<span>Moeilijkheid: ++</span>
		</div>
	</div>


	<div id="achievements-box-3">
		<div class="level-box-opdrachten">
			<div class="opdracht2">
				
			</div>
			<div id="RUIM_KAMER_OP">
				<span>RUIM KAMER OP</span>
			</div>
		</div>
		<div id="Moeilijkheid___">
			<span>Moeilijkheid: +</span>
		</div>
	</div>

	<div class="levelbox">
		
	</div>

	<div id="Level_1">
		<span>Level 1</span>
	</div>
	<img id="award" src={award} ></img>
	
	

	<Register />
   
    


    </div>
	</div>

  );
}

export default achievementsLevel;