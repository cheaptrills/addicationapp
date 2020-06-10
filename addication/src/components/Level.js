import React, { Component } from 'react';

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

export class Level extends Component{
    render() {
        return(
            <div>
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
            </div>
        )
    }
}

export default Level;