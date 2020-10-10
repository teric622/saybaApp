import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import One from '../src/components/OneComponent/One'
import Messaging from './components/MessagingComponent/Messaging'


// import Manager from '../src/components/ManagerComponent/Manager'

import TwoDoMotherBoard from '../src/components/TwoDoComponent/TwoDoMotherBoard'
import Home from './components/HomeComponent/Home';
// import Msging from './components/MessagingComponent/Msging'
import Relax from './components/RelaxComponent/Relax';



function App() {


  return (
    <Router>
    <div className="app">
      <Switch>
          <Route exact path='/' component={One} />
          <Route path='/rooms/:roomId' component={Messaging} />
        
          <Route path='/:roomId/home' component={Home} />
          <Route exact path='/:roomId/video' component={TwoDoMotherBoard} />
          <Route exact path='/:roomId/balance' component={Relax} />
        </Switch>
      </div>
    </Router>
         

   
  );
}

export default App;
