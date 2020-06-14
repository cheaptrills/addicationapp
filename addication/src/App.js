import React from 'react';
import logo from './logo.svg';
import {Register,Profile,Login,Home,Settings,Achievements,AchievementsLevel,AchievementsMood,Opdrachtuitleg,DiaryRead,DiaryEntry,DiaryMenu,Diary,Opdrachtkeuze,AchievementsDairy,NoodknopMain,NoodsituatieDrangterugval} from './routes/index';
import './css/App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//import {Register,Profile,Login,Home} from './routes/index';
//import Launches from  './components/Launches';
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
              <Link to="/NoodknopMain">     NoodknopMain</Link>

              
            </li>
            <li>
              <Link to="/NoodsituatieDrangterugval"> NoodsituatieDrangterugval</Link>

            </li>
            <li>
              <Link to="/opdrachtkeuze">opdrachtlijst</Link>
            </li>
            <li>
              <Link to="/diaryentry">diaryentry</Link>
            </li>
            <li>
              <Link to="/diarymenu">diarymenu</Link>
            </li>
            <li>
              <Link to="/diary">diary</Link>
            </li>
            <li>
              <Link to="/opdrachtuitleg">opdrachtuitleg</Link>
            </li>
          </ul>
        </nav>

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
          <Route path="/diary">
            <Diary/>
          </Route>
          <Route path="/opdrachtuitleg">
            <Opdrachtuitleg/>
          </Route>
          <Route path="/diaryread">
            <DiaryRead/>
          </Route>
          <Route path="/settings">
              <Settings />
          </Route>
          <Route path="/achievements">
              <Achievements />
          </Route>
          <Route path="/achievementsLevel">
              <AchievementsLevel />
          </Route>
          <Route path="/achievementsDairy">
              <AchievementsDairy />
          </Route>
          <Route path="/NoodknopMain">
              <NoodknopMain />
          </Route>
          <Route path="/achievementsMood">
              <AchievementsMood />
          </Route>
          <Route path="/NoodsituatieDrangterugval">
              <NoodsituatieDrangterugval />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
