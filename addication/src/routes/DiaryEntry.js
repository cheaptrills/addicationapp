import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import CurrentLevel from '../components/CurrentLevel';
import backbutton from "../SVG/back-button.svg";

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
        <img src={backbutton} alt="terugknop" class="terugknop"/>
        </a>
    </div>
    
     <br/>
      <CurrentLevel />
   </header>
      
      
       <div class="maindash"> 
       
     <section class="dash1" id="opdrachten"> 
     <div class="inhouddagboek">
     
      <h2 id="vulin"> Dag #</h2>
      <form>
      <textarea id="titeldagboek" name="titeldagboek" placeholder="Titel" rows="1" cols="10">
      </textarea>  
      <br /> 
     <textarea id="textdagboek" name="tekstdagboek" placeholder="Vul het dagboek in" rows="10" cols="30">
      </textarea>
    <br/>
   
    <div class="gebruik"> 
     <input type="checkbox" id="gebruikt" name="gebruikt" value="niet gebruikt"/> 
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