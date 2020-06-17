import React from 'react';
import CurrentLevel from '../components/CurrentLevel';
import backbutton from "../SVG/back-button.svg";
import { useHistory } from 'react-router-dom';
import Register from "../components/navigator";



function Opdrachtuitleg() {
    const history = useHistory();

  return (
    <div className="base-container">
        <header>
            <div class="start"> 
                <a onClick={()=>history.push("/opdrachtkeuze")}> 
                    <img src={backbutton} alt="terugknop" class="terugknop"/>
                </a>
            </div>
            <br />
            <CurrentLevel />
        </header>
        <div class="maindash">   
            <button class="dash1" id="opdrachten"> 
                <div class="inhoudopdracht">
                    <p class="moeilijkheid"> Moeilijkheidsgraad: + of ++</p>
                    <h2> Opdracht titel</h2>
                    <p class="uitleg"> Uitleg van de opdracht vb: Ruim vandag je kamer op, let er zeker op dat je deze dingen gedaan hebt:</p>
                    <ul> 
                        <li> Stofzuigen</li>
                        <li> Dwijlen</li>
                        <li> Stof afvegen</li>
                        <li> Minstens 1 kast herstructureren</li>
                    </ul>
                </div>
            </button>  
            <div class="form__field">
                <a href="startopdracht.html" class="startop">START</a>
			</div>
        </div>
       <Register /> 
    </div>
    );
}

export default Opdrachtuitleg; 