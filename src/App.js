
import './App.css';
import React from 'react';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/home"></Link>
        </li>
        <li>
          <Link to="/About"></Link>
        </li>
        <li>
          <Link to="/Users"></Link>
        </li>
      </ul>
    </nav>
  </div>)
}

export default App;
