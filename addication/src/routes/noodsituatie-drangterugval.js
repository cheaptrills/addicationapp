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





function NoodknopDrangterugval() {

  return (

    <div id="scale" >







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

   <div id="Group_17">
		<div id="DRANG_TERUGVAL">
			<span>DRANG TERUGVAL</span>
		</div>
	</div>

   <div class="terugval-box-2">
		<div class="noodsituatie-rect-box">
			
		</div>
	</div>
	<div id="noodsituatie-text-in-box">
		<span>*hier komt tekst*</span>

	</div>
	<div class="noodsituatie-button">
		
		<input type="button" value="BEL DRUGLIJN" id="BEL_DRUGLIJN" onClick="" />

	</div>

	

	<Register />
   
    

</div>
  

  );
}

export default NoodknopDrangterugval;