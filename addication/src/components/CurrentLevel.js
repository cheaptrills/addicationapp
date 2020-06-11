import React, { Component } from 'react';
//import '../css/stylejonas.css';
import '../css/stylechloe.css';

import level1 from "../SVG/level1.svg";

import levelbalk from "../SVG/level-balk.svg";
import levelaanduiding from "../SVG/level-aanduiding.svg";

export class CurrentLevel extends Component{
    render() {
        return(
        
               <div class="currentlevel">
                    <img src={level1} class="level"/>
                    <img src={levelbalk} class="levelbalk"/>
                    <img src={levelaanduiding} class="levelaanduid"/>
                    <img src={levelaanduiding} class="levelaanduid1"/>
                </div>
            
        )
    }
}

export default CurrentLevel;