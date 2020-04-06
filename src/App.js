import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';
import Category from './mycomponents/Category';
import Arrow from './mycomponents/Arrow';
import MyStates from './mycomponents/MyStates';
import MyDynamicStates from './mycomponents/MyDynamicStates';

function App() {
  return (
    <div className="App">
      {/* <Hello name="Mahmud" age="30"/>
      <Welcome name="ARM Head Office"/>
      <Category/>
      <Arrow/>
      <MyStates/> */}
      <MyDynamicStates/>
    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;