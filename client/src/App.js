import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fib from './fib';
import OtherPage from './otherPage';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-Title">Welcome to React</h1>
        </header>
        <div>
          <Route exact path="/" component={Fib}></Route>
          <Route exact path="/otherpage" component={OtherPage}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
