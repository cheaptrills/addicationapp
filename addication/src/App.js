import React from 'react';
import logo from './logo.svg';
import {Register,Profile,Login,Home,Settings,Achievements} from './routes/index';
import './css/App.css';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Register,Profile,Login,Home} from './routes/index';
import Launches from  './components/Launches';
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

          <Route path="/settings">
              <Settings />
          </Route>

          <Route path="/achievements">
              <Achievements />
          </Route>
        </Switch>
        <Launches />
      </div>
    </Router>
    
  );
}

export default App;
