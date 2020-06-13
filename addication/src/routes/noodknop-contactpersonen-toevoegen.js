import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../scale/scale.js';






import Plus1 from "../SVG/plus1.svg";
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





function NoodknopContactpersonenToevoegen() {

  return (

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

   <form action="/action_page.php">



	<div class="noodknop-contact-button1">
		<div class="noodknop-babbel-vierkant">
	
		<input type="text"  name="add_contact_name" class="add-contact-input" placeholder="naam"/>

			
		</div>
	
		</div>
	
	<div class="noodknop-contact-button2">
		<div class="noodknop-babbel-vierkant">
		<input type="text"  name="add_contact_number" class="add-contact-input" placeholder="telefoonnummer"/>

		</div>
	
		</div>

<div class="dottedborder">
	

		</div>

		<img  id="plus1" src={Plus1} ></img>

		<div id="OPSLAAN">
		<input type="submit" value="OPSLAAN" />
	</div>
	


		</form> 


	

	<Register />
   
    </div>




  

  );
}

export default NoodknopContactpersonenToevoegen;