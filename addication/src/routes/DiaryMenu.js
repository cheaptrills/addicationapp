import React from 'react';
import {useHistory} from 'react-router-dom';
//import './App.css';
//import './chloestyle';
import CurrentLevel from "../components/CurrentLevel";
import backbutton from "../SVG/back-button.svg";
import hulp from "../SVG/hulp-icon.svg";
import { useUserDispatch } from '../context/UserContext';

function DiaryMenu() {

  const history = useHistory();

  return (
      /*hier komt header en level */
    <div className="base-container">
      <header>
        <div class="start"> 
          <a onClick={()=>history.push("/home")}> 
            <img src={backbutton} alt="terugknop" class="terugknop"/>
          </a>
          <p class="title"> DAGBOEK </p>
        </div>
        <br/>
        <CurrentLevel />
      </header>
      <div class="maindash"> 
        <a onClick={()=>history.push("/diaryentry")}>
          <button class="dash" id="opdrachten"> 
            <div class="inhoud">
              <p> VUL DAGBOEK IN</p>
            </div>
          </button>
        </a>
        <a onClick={()=>history.push("/moodslider")}>
          <button class="dash" id="dagboek"> 
            <div class="inhoud">
            <p> MOODSLIDER</p>
            </div>
          </button>
        </a> 
        <a onClick={()=>history.push("/diary")}>
          <button class="dash" id="dagboek"> 
            <div class="inhoud">
              <p> DAGBOEK LEZEN</p>
            </div>
          </button>
        </a> 
        <a href="dagboek-hulp.html"> 
          <button class="dash" id="noodknop"> 
            <div class="inhoud">
              <img src={hulp} alt="hulp" class="hulpicon"/>
              <p> HULP</p>
            </div>
          </button>
        </a>
      </div>
    </div>
    );
}

export default DiaryMenu;