import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './css/App.css'
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

      </div>
    </Router>
  );
}

export default App;
