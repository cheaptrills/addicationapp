import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import './scale.js';






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





function Noodknop() {

  return (

    <div id="scale" className="gradient">







   
   <a href="#"><img class="arrow" src={arrow}></img></a>
	

   <div id="NOODKNOP">
		<span>NOODKNOP</span>
	</div>
	<div onclick="application.goToTargetView(event)" id="Group_17">
		<svg class="Rectangle_9">
			<rect fill="rgba(255,255,255,0.902)" id="Rectangle_9" rx="22" ry="22" x="0" y="0" width="341" height="114">
			</rect>
		</svg>
		<div id="NOODSITUATIE">
			<span>NOODSITUATIE</span>
		</div>
	</div>
	<div onclick="application.goToTargetView(event)" id="Group_18">
		<div id="Group_19">
			<svg class="Rectangle_9_c">
				<rect fill="rgba(255,255,255,0.902)" id="Rectangle_9_c" rx="22" ry="22" x="0" y="0" width="341" height="115">
				</rect>
			</svg>
			<div id="PSYCHOLOGEN">
				<span>PSYCHOLOGEN</span>
			</div>
		</div>
	</div>
	<div onclick="application.goToTargetView(event)" id="Group_22">
		<div id="Group_20">
			<svg class="Rectangle_9_g">
				<rect fill="rgba(255,255,255,0.902)" id="Rectangle_9_g" rx="22" ry="22" x="0" y="0" width="341" height="114">
				</rect>
			</svg>
			<div id="HULP">
				<span>HULP</span>
			</div>
		</div>
		<img id="question" src="question.png" srcset="question.png 1x, question@2x.png 2x"></img>
	</div>

	<div onclick="application.goToTargetView(event)" id="Group_23">
		<div id="Group_19_">
			<svg class="Rectangle_9_">
				<rect fill="rgba(255,255,255,0.902)" id="Rectangle_9_" rx="22" ry="22" x="0" y="0" width="341" height="114">
				</rect>
			</svg>
			<div id="CONTACTPERSONEN">
				<span>CONTACTPERSONEN</span>
			</div>
		</div>
	</div>


	
	
	

	<Register />
   
    

</div>
  

  );
}

export default Noodknop;