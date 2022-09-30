import Index from './pages/index';
import Show from './pages/show'
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Index/>
        </Route>

        <Route exact path="/show">
            <Show />
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;
