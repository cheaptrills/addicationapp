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





function NoodknopNoodsituatie() {

  return (

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

   <div id="NOODKNOP">
		<span>NOODKNOP</span>
	</div>
	<div  class="box1">
		<div class="noodsituatie">
		<input type="button" value="DRANG TERUGVAL" class="noodsituatie" onClick="" />
		</div>
		
	</div>
	
		<div class="box2">
			<div class="psychologen">
			<input type="button" value="BIJWERKINGEN" class="psychologen" onClick="" />
			</div>
		</div>	
	
	<div id="box3">
	
			<div class="hulp">
			<input type="button" value="AMBULANCE NODIG" class="hulp" onClick="" />
	
		
		</div>
		
	</div>

	<div  id="box4">
		
			<div class="contactpersonen">
			<input type="button" value="NOOD AAN BABBEL" class="contactpersonen" onClick="" />
			</div>
		
		
	</div>


	
	
	

	<Register />
   
    

</div>
  

  );
}

export default NoodknopNoodsituatie;