import React from 'react';
import CurrentLevel from '../components/CurrentLevel';
import { useHistory } from "react-router-dom";
import backbutton from "../SVG/back-button.svg";
import hulp from "../SVG/hulp-icon.svg";


//import './App.css';
//import './chloestyle.css';

function Opdrachten() {
    const history = useHistory();

  return (
    <div className="base-container">
         <header>
    <div class="start"> 
       <a onClick={() => history.push("/home")}> 
        <img src={backbutton} alt="terugknop" class="terugknop"/>
        </a>
        <p class="title"> OPDRACHTEN </p>
    
    </div>
    
     <br />
      <CurrentLevel />
   </header>
       <div class="maindash"> 
       <a onClick={() => history.push("/opdrachtkeuze")}>
     <button class="dash" id="opdrachten"> 
     <div class="inhoud">
      
      <p> KIES OPDRACHT</p>
      </div>
     </button>
      </a>
      
      <a href="medailles-opdracht.html">
      <button class="dash" id="dagboek"> 
      <div class="inhoud">
     
      <p> MEDAILLES</p>
          </div>
     </button>
      </a> 
      
      <a onClick={() => history.push("/opdrachthulp")}> 
       <button class="dash" id="noodknop"> 
       <div class="inhoud">
      <img src={hulp}alt="hulp" class="hulpicon"/>
      <p> HULP</p>
           </div>
     </button>
       </a>
       
      
 
   </div>
    
      </div>
    );
}

export default Opdrachten;