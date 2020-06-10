import React, { Component } from 'react';
import '../css/stylejonas.css';

import navigator from "../SVG/navigator.svg";
import home from "../SVG/home.svg";
import taken from "../SVG/takenlijst.svg";
import dagboek from "../SVG/dagboek.svg";
import profiel from "../SVG/profiel.svg";

export class Navigator extends Component{
    render() {
        return(
            <div>
                <nav  class="nav">
                    <img class=".navbox" src={navigator} />
                    <a href="#">
                        <img src={home} alt="" class="home"></img>
                    </a>
                    <a href="#">
                        <img class="takenlijst" src={taken} ></img>  
                    </a>
                    <a href="#">
                        <img class="dagboek" src={dagboek} ></img>
                    </a>
                    <a href="#">
                        <img src={profiel} alt="" class="profiel"></img>
                    </a>
	            </nav>
            </div>
        )
    }
}

export default Navigator;