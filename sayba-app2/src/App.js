import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import One from '../src/components/OneComponent/One'
import Messaging from './components/MessagingComponent/Messaging'

import Video from '../src/components/VideoComponent/Video'
import Explore from '../src/components/ExploreComponent/Explore'
import Home from './components/HomeComponent/Home';

function App() {


  return (
    <Router>
    <div className="app">
      <Switch>
          <Route exact path='/' component={One} />
          <Route path='/rooms/:roomId' component={Messaging} />
          
          <Route path='/home' component={Home} />
          <Route exact path='/video' component={Video} />
          <Route exact path='/explore' component={Explore} />
        </Switch>
      </div>
    </Router>
         

   
  );
}

export default App;
