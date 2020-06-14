import React from 'react';
//import './App.css';
import '../css/stylejonas.css';








import arrow from "../SVG/arrow.svg";

import Level from  '../components/Level';
import Register from '../components/navigator';
import Tags from '../components/Metatags';





function NoodknopDrangterugval() {

  return (
	  <div>
		  <Tags/>

    <div id="scale" >







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	
	<Level/>

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

</div>
  

  );
}

export default NoodknopDrangterugval;