import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import feathersjs from "@feathersjs/feathers";
import Primus from "@feathersjs/primus-client";
const socket = new Primus("http://localhost:3001");
const f = feathersjs();
f.configure(Primus(socket));
//f.service("message").on("created",message => console.log(message));
f.service("message").create({foo:"bar"});
//import primus from "./primus";
//let p = primus.connect("localhost:3001",{reconnect:{max:Infinity,min:500,retries:10}});

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dit is React code
        </p>
        <a
          className="App-link"
          href="https://www.alphen.dev/addication"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to addication.com
        </a>
      </header>
    </div>
  );
}

export default App;
