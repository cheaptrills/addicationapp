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





function NoodknopHulp() {

  return (

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
   <div class="noodknop-psy-box1">
		<svg class="noodknop-psy-vierkant">
			

			<input type="button" class="noodknop-psy-vierkant" onClick="" />
		</svg>
		<div class="noodknop-psy-text1">
			<span>Geert van reussel</span>
		</div>
		<div class="noodknop-psy-text2">
			<span>Antwerpsesteenweg 66<br/>2800 Mechelen<br/>0489/294719</span>
		</div>
		<div class="noodknop-psy-text3">
			<span>gespecialiseerd in: <br/>gedragspsychologie</span>
		</div>
	</div>
	<div class="noodknop-psy-box2">
		<svg class="noodknop-psy-vierkant">
		<input type="button" class="noodknop-psy-vierkant" onClick="" />
			
		</svg>
		<div class="noodknop-psy-text1">
			<span>Geert van reussel</span>
		</div>
		<div class="noodknop-psy-text2">
			<span>Antwerpsesteenweg 66<br/>2800 Mechelen<br/>0489/294719</span>
		</div>
		<div  class="noodknop-psy-text3">
			<span>gespecialiseerd in: <br/>gedragspsychologie</span>
		</div>
	</div>

  
	<Register />
   
    

</div>
  

  );
}

export default NoodknopHulp;