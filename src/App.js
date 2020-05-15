import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './css/App.css'
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Header}/>

      </div>
    </Router>
  );
}

export default App;
