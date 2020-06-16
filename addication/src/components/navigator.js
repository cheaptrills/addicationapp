import React, { Component } from 'react';
import '../css/stylejonas.css';

import navigator from "../SVG/navigator.svg";
import home from "../SVG/home.svg";
import taken from "../SVG/takenlijst.svg";
import dagboek from "../SVG/dagboek.svg";
import profiel from "../SVG/profiel.svg";
import { useHistory } from "react-router-dom";


export function Navigator() {

    const history = useHistory();
    
        return(
            <div>
                <nav  class="nav">
                    <img class="navbox" src={navigator} />
                    <a onClick={() => history.push("/home")}>
                        <img src={home} alt="" class="home"></img>
                    </a>
                    <a onClick={() => history.push("/opdrachtkeuze")}>
                        <img class="takenlijst" src={taken} ></img>  
                    </a>
                    <a onClick={() => history.push("/diarymenu")}>
                        <img class="dagboek" src={dagboek} ></img>
                    </a>
                    <a onClick={() => history.push("/profile")}>
                        <img src={profiel} alt="" class="profiel"></img>
                    </a>
	            </nav>
            </div>
        )
    }


export default Navigator;