import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import One from '../src/components/OneComponent/One'
import Message from '../src/components/MessageComponent/Message'

function App() {


  return (
    <Router>
    <div className="app">
      <Switch>
          <Route exact path='/' component={One} />
          <Route path='/message' component={Message} />
        </Switch>
      </div>
    </Router>


   
  );
}

export default App;
