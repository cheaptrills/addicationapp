import React from 'react';
import logo from './logo.svg';
import {Register,Profile,Login,Home,Settings,Achievements,Noodknophulp,AchievementsLevel,AchievementsMood,Opdrachtuitleg,DiaryRead,DiaryEntry,DiaryMenu,Diary,Opdrachtkeuze,AchievementsDairy,Noodknopnoodsituatie,NoodknopMain,NoodsituatieDrangterugval, Opdrachten, Opdrachthulp, Noodknoppsychologen} from './routes/index';
import './css/App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//import {Register,Profile,Login,Home} from './routes/index';
//import Launches from  './components/Launches';
//import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import {useGlobalState,useGlobalDispatch} from './context/GlobalContext';
import NoodknopBijwerkingen from './routes/noodsituatie-bijwerkingen';

function App() {
  let dispatch = useGlobalDispatch();

  return (    
    <Router>
      <div>
        <nav>
          
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
          <Route path="/noodknopnoodsituatie">
              <Noodknopnoodsituatie />
          </Route>
          <Route path="/achievementsMood">
              <AchievementsMood />
          </Route>
          <Route path="/NoodsituatieDrangterugval">
              <NoodsituatieDrangterugval />
          </Route>
          <Route path="/Opdrachten">
              <Opdrachten />
          </Route>
          <Route path="/Opdrachthulp">
              <Opdrachthulp />
          </Route>
          <Route path="/noodknophulp">
              <Noodknophulp />
          </Route>
          <Route path="/noodknoppsychologen">
              <Noodknoppsychologen />
          </Route>
          <Route path="/noodsituatiebijwerkingen">
              <NoodknopBijwerkingen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
