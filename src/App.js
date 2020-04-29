import React from 'react';
import './App.css';
import Header from './Components/header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
