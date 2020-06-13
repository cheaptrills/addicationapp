import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../scale/scale.js';







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





function NoodknopContactpersonen() {

  return (

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

   <div class="noodknop-babbel-tekst">
		<div class="noodknop-babbel-h1">
			<span>NOOD AAN BABBEL</span>
		</div>
		<div class="noodknop-babbel-p1">
			<span>Bel:</span>
		</div>
		<div class="noodknop-babbel-p2">
			<span>SMS:</span>
		</div>
	</div>
	<div class="noodknop-babbel-button1">
		<div class="noodknop-babbel-vierkant">
	
			<input type="button" value="Mama" class="noodknop-babbel-vierkant" onClick="" />

			
		</div>
	
		</div>
	
	<div class="noodknop-babbel-button2">
		<div class="noodknop-babbel-vierkant">
		<input type="button" value="Tom" class="noodknop-babbel-vierkant" onClick="" />

		</div>
	
		</div>

		<div class="noodknop-babbel-button3">
		<div class="noodknop-babbel-vierkant">
		<input type="button" value="mama" class="noodknop-babbel-vierkant" onClick="" />

		</div>
	
		</div>



	

	<Register />
   
    </div>


  

  );
}

export default NoodknopContactpersonen;