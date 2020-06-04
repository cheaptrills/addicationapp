import React from 'react';
//import './App.css';

function Keuze() {

  return (
    <div className="base-container">
         <header>
       <img src="logo.svg" class="logo"/>
       
   </header>
   
   <form class="form" method="post">
       
        <p class="tekst"> Aan welk middel ben je verslaafd? 
        <br/> Maak hier jouw keuze. </p>
      
        <div class="form__field">
					<input type="submit" value="Alcohol" class="btn"/>
        </div>
        <div class="form__field">
					<input type="submit" value="Wiet" class="btn"/>
        </div>
        <div class="form__field">
					<input type="submit" value="Cocaïne" class="btn"/>
        </div>

 
   </form>
    
      </div>
    );
}

export default Keuze;