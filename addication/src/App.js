import React from 'react';
import logo from './logo.svg';
import {Register,Profile,Login,Home,Settings,Achievements,AchievementsLevel,AchievementsMood,DiaryEntry,DiaryMenu,Opdrachtkeuze,AchievementsDairy} from './routes/index';
import './css/App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//import {Register,Profile,Login,Home} from './routes/index';
//import Launches from  './components/Launches';
//import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

//import {Register,Profile,Login,Home,,, } from './routes/index';
//import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import {useGlobalState,useGlobalDispatch} from './context/GlobalContext';

function App() {
  let dispatch = useGlobalDispatch();

  return (    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/login">login</Link>


            </li>

            <li>
              <Link to="/settings">settings</Link>

              
            </li>

            <li>
              <Link to="/achievements">achievements</Link>

              
            </li>

            <li>
              <Link to="/achievementsLevel">AchievementsLevel</Link>

              
            </li>

            <li>
              <Link to="/achievementsMood">  AchievementsMood</Link>

              
            </li>
            <li>
              <Link to="/achievementsDairy">  AchievementsDairy</Link>

              
            </li>

          

         



            <li>
              <Link to="/opdrachtkeuze">opdracht</Link>
            </li>
            <li>
              <Link to="/diaryentry">diaryentry</Link>
            </li>
            <li>
              <Link to="/diarymenu">diarymenu</Link>
            </li>
          </ul>
        </nav>
        <input type="text" onBlur={(d)=>{dispatch({type: "user", value: {username: d.target.value}})}} />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Register/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/opdrachtkeuze">
            <Opdrachtkeuze />
          </Route>
          <Route path="/diaryentry">
            <DiaryEntry/>
          </Route>
          <Route path="/diarymenu">
            <DiaryMenu/>
          </Route>

          <Route path="/settings">
              <Settings />
          </Route>

          <Route path="/achievements">
              <Achievements />
          </Route>

          <Route path="/achievementsLevel">
              <     AchievementsLevel />
          </Route>

          <Route path="/achievementsDairy">
              <          AchievementsDairy />
          </Route>

     

          


          <Route path="/achievementsMood">
              <     AchievementsMood />
          </Route>

     
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
