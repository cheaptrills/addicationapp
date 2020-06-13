import React from 'react';
import logo from './logo.svg';

import {Register,Profile,Login,Home,Opdrachtkeuze,DiaryEntry, DiaryMenu,Diary, Opdrachtuitleg, DiaryRead} from './routes/index';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
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
          <Route path="/diary">
            <Diary/>
          </Route>
          <Route path="/opdrachtuitleg">
            <Opdrachtuitleg/>
          </Route>
          <Route path="/diaryread">
            <DiaryRead/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
