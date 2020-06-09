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
import profile from "../SVG/profiel.svg";


function settings() {

  return (

    <div id="scale" className="gradient">



   
   
    


    
    <a href="#"><img className="arrow" src={arrowsvg} ></img> </a> 

	<div className="rect">

    <img src={profile} className="porfielsvg"></img>
		
	</div>

    <img className="arrow" src={arrowsvg} ></img>

	


	
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