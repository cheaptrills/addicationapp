import React from 'react';
//import './App.css';
import '../css/stylejonas.css';








import arrow from "../SVG/arrow.svg";
import Level from  '../components/Level';
import Register from '../components/navigator';
import Tags from '../components/Metatags';





function NoodknopNoodsituatie() {

  return (

	<div>

	<Tags/>

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	
<Level/>
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

</div>

  );
}

export default NoodknopNoodsituatie;