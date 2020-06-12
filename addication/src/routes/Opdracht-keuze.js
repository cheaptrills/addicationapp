import React from 'react';
//import './App.css';
//import './chloestyle.css';
import backbutton from "../SVG/back-button.svg";
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo';
import CurrentLevel from '../components/CurrentLevel';

const GET_TASK = gql
`{
  tasks(level: 2) {
    title
    difficulty
  }
}`;

function Opdrachtkeuze() {

  const{
     loading, error, data 
  }= useQuery(GET_TASK);

  if(loading) return <h4>loading</h4>
  if(error) console.log(error);
  console.log(data);

  return (
    <div className="base-container">
      <header>
        <div class="start"> 
          <a href="dashboard.html"> 
            <img src={backbutton} alt="terugknop" class="terugknop"/>
          </a>
        </div>
        <br />
       <CurrentLevel />
      </header>
      <div class="maindash"> 
        {
          data.tasks.map(task => (
          <a href="opdracht-uitleg.html">
            <button class="dash" id="opdrachten"> 
              <div class="inhoud">
                <p class="moeilijkheidsgraad"> {task.difficulty}</p>
                <p> {task.title}</p>
              </div>
            </button>
          </a>
          )) 
        }
      </div>
    </div>
    );
}

export default Opdrachtkeuze;