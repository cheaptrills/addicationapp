import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';

//import './App.css';
//import './chloestyle.css';

function DiaryEntry() {

  const [fields, setFields] = useState({

    diaryTitle: null,
    diaryEntry: null

  });


  let history = useHistory();

  const handleEntry = ()=> {
    if(fields.username == null < 2){
      alert("Geef een titel in");
      return null; 
    }
    
    if(fields.password == null || fields.password.length < 6){
      alert("Vul je dagboek met wat meer woorden");
      return null; 
    }

    history.push("/profile");
  } 

  const setField = ({target}, field) => {

    let oldFields = fields;
    oldFields[field] = target.value;
    setFields(oldFields);

  };

  return (

    <div>
        <header>
    <div class="start"> 
       <a href="dashboard.html"> 
        <img src="SVG/back-button.svg" alt="terugknop" class="terugknop"/>
        </a>
        
    
    </div>
    
     <br/>
      <div class="currentlevel">
      <img src="SVG/level1.svg" class="level"/>
       <img src="SVG/level-balk.svg" class="levelbalk"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid"/>
       <img src="SVG/level-aanduiding.svg" class="levelaanduid1"/>
       
       </div>
   </header>
      
      
       <div class="maindash"> 
       
     <section class="dash1" id="opdrachten"> 
     <div class="inhouddagboek">
     
      <h2 id="vulin"> Dag #</h2>
      <form>
     <textarea id="textdagboek" name="tekstdagboek" rows="10" cols="30">
        Vul het dagboek in
</textarea>
    <br/>
   
    <div class="gebruik"> 
     <input type="radio" id="gebruikt" name="gebruikt" value="niet gebruikt"/> 
          Ik heb vandaag niet gebruikt 
          </div>
         
      <div class="form__field"> 
                    
					<input type="submit" value="OK" class="ok"/>
				</div>
      </form>
      </div>
     </section>
      
   

      
 
   </div>

    </div>
  );

    
}

export default DiaryEntry;