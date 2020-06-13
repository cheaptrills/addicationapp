import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../scale/scale.js';







import arrow from "../SVG/arrow.svg";

import Level from  '../components/Level';
import Register from '../components/navigator';
import Tags from '../components/Metatags';





function NoodknopBabbel() {

  return (


	<div>

		<Tags/>

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	
<Level/>
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

	</div>


  

  );
}

export default NoodknopBabbel;