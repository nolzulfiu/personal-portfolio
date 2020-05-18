import React from 'react';
// import './App.min.css';
import './App.css';
import Header from './Components/header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/home';
import About from './Pages/about';
import ScrollToTop from './Components/scrollToTop';

//Projects
import Miscellaneous from './Pages/Projects/miscellaneous';
import DocPlatform from './Pages/Projects/docplatform';
import JobBoard from './Pages/Projects/job-board';
import Website from './Pages/Projects/website';
import Disso from './Pages/Projects/disso';
import Networking from './Pages/Projects/networking';
import ClientReport from './Pages/Projects/client-report';

function App() {
  return (
      <Router>      
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/miscellaneous" exact component={() => <Miscellaneous />} />
          <Route path="/docplatform" exact component={() => <DocPlatform />} />
          <Route path="/jobboard" exact component={() => <JobBoard />} />
          <Route path="/website" exact component={() => <Website />} />
          <Route path="/disso" exact component={() => <Disso />} />
          <Route path="/networking" exact component={() => <Networking />} />
          <Route path="/clientreport" exact component={() => <ClientReport />} />
        </Switch>
      </Router>
  );
}

export default App;