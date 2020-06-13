import React from 'react';
//import './App.css';
import '../css/stylejonas.css';








import arrow from "../SVG/arrow.svg";

import Level from  '../components/Level';
import Register from '../components/navigator';
import Tags from '../components/Metatags';





function NoodknopBijwerkingen() {

  return (

	<div>

		<Tags/>

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	
<Level/>
   <div class="mood-opdrachten">
		<div id="DRANG_TERUGVAL">
			<span>BIJWERKINGEN</span>
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
		
		<input type="button" value="BEL DOKTER" id="BEL_DRUGLIJN" onClick="" />

	</div>

	

	<Register />
   
    

</div>

</div>
  

  );
}

export default NoodknopBijwerkingen;