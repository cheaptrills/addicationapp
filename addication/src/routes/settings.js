import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../css/stylechloe.css';
import './scale.js';

import pencilsvg from "../SVG/pencil.svg";
import arrowsvg from "../SVG/arrow.svg";

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



function settings() {

  return (

    <div id="scale" className="gradient">

<header>
           <div class="levelsheader"> 
              <img src={level2} class="lev"/> 
              <img src={level3} class="lev"/>
              <img src={level4} class="lev"/>
              <img src={level5} class="lev"/>
              <img src={level6} class="lev"/>
              <img src={level7} class="lev"/>
              <img src={level8} class="lev"/>
          </div>
          <br />
          <div class="currentlevel">
            <img src={level1} class="level"/>
            <img src={levelbalk} class="levelbalk"/>
            <img src={levelaanduiding} class="levelaanduid"/>
            <img src={levelaanduiding} class="levelaanduid1"/>
          </div>
        </header>
   
   
   
    
	<div className="level">
	
	
	</div>

    <div>
    <a href="#"><img className="arrow" src={arrowsvg} ></img> </a> </div>

	<div className="rect">
		
	</div>

    <img className="arrow" src={arrowsvg} ></img>

	<svg className="Path_10_bfq" viewBox="0 0 66.531 62.237">
		<linearGradient id="Path_10_bfq" spreadMethod="pad" x1="0.5" x2="0.5" y1="1.004" y2="0.004">
			<stop offset="0" stop-color="#0ba5b0" stop-opacity="1"></stop>
			<stop offset="0.9836" stop-color="#6fbecd" stop-opacity="1"></stop>
		</linearGradient>
		<path fill="url(#Path_10_bfq)" id="Path_10_bfq" d="M 56.7877082824707 40.23253631591797 C 53.16450881958008 36.84331893920898 48.85196304321289 34.33428192138672 44.1467170715332 32.81544494628906 C 49.18617248535156 29.56856918334961 52.49699020385742 24.1346607208252 52.49699020385742 17.99025726318359 C 52.49699020385742 8.070454597473145 43.86968231201172 0 33.26541900634766 0 C 22.66115379333496 0 14.03384304046631 8.070454597473145 14.03384304046631 17.99025726318359 C 14.03384304046631 24.1346607208252 17.34466361999512 29.56856918334961 22.38424301147461 32.81544494628906 C 17.67900657653809 34.33428192138672 13.36645698547363 36.84331893920898 9.743255615234375 40.23253631591797 C 3.460246562957764 46.11012268066406 -6.934626071597449e-06 53.92458343505859 -6.934626071597449e-06 62.236572265625 L 5.197714805603027 62.236572265625 C 5.197714805603027 47.75890731811523 17.78880882263184 35.98051452636719 33.26541900634766 35.98051452636719 C 48.74202728271484 35.98051452636719 61.33311462402344 47.75890731811523 61.33311462402344 62.236572265625 L 66.53083801269531 62.236572265625 C 66.53083801269531 53.92458343505859 63.07058715820312 46.11012268066406 56.7877082824707 40.23253631591797 Z M 19.23156547546387 17.99025726318359 C 19.23156547546387 10.75136661529541 25.52717590332031 4.862231731414795 33.26541900634766 4.862231731414795 C 41.00365829467773 4.862231731414795 47.29927062988281 10.75136661529541 47.29927062988281 17.99025726318359 C 47.29927062988281 25.22914886474609 41.00365829467773 31.1182861328125 33.26541900634766 31.1182861328125 C 25.52717590332031 31.1182861328125 19.23156547546387 25.22914886474609 19.23156547546387 17.99025726318359 Z">
		</path>
	</svg>
	


	
	  <div className="change_firstname">
             
            <input type="text"  name="change_firstname" id="input" placeholder="Jan"/>
            <img src={pencilsvg} class="icon" />    
          </div>
          
          
          
	  <div className="change_lastname">
             
            <input type="text"  name="change_lastname" id="input" placeholder="jansens"/>
            <img src={pencilsvg}  class="icon" />    
          </div>

	      
	  <div className="change_email">
             
            <input type="text"  name="change_email" id="input" placeholder="janjansen@hotmail.com"/>
            <img src={pencilsvg}  class="icon" />    
          </div>
          
            <div className="change_password">
             
            <input type="password"  name="change_password" id="input" placeholder="password"/>
            <img src={pencilsvg}  class="icon" />    
          </div>
          
          
          <div className="changedrugs"> 
        <input type="button" value="Verander van drugs" id="button" onClick="" />
      </div>
      
      
        
          <div className="resetvooruitgang"> 
        <input type="button" value="reset je vooruitgang" id="button" onClick="" />
      </div>
      
        
          <div className="uitloggen"> 
        <input type="button" value="uitloggen" id="button" onClick="" />
      </div>
      
      

	


	<div className="removeaccount">
		<a href="#">verwijder je account</a>
	</div>

    </div>

  );
}

export default settings;