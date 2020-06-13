import React from 'react';
//import './App.css';
import '../css/stylejonas.css';
import '../css/stylechloe.css';
import '../scale/scale.js';

import pencilsvg from "../SVG/pencil.svg";
import arrowsvg from "../SVG/arrow.svg";


import profile from "../SVG/profiel.svg";

import Register from '../components/navigator';
import Tags from '../components/Metatags';
import Level from '../components/Level';


function settings() {

  return (

    <div>

<Tags/>




    <div id="scale" className="gradient">



   
   



    
    <a href="#"><img className="arrow" src={arrowsvg} ></img> </a> 

<Level/>
	<div class="rect">

    <img src={profile} className="porfielsvg"></img>
		
	</div>




    

    <img className="arrow" src={arrowsvg} ></img>

	

    <div class="settings-scrol">
	
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
          <input type="button" value="reset vooruitgang" id="button" onClick="" />

      </div>
      
        
          <div className="uitloggen"> 
        <input type="button" value="uitloggen" id="button" onClick="" />
      </div>
      
      

	


	<div className="removeaccount">
		<a href="#">verwijder je account</a>
	</div>
</div>
    <Register />

    </div>

    </div>

  );
}

export default settings;