import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import One from '../src/components/OneComponent/One'
import Messaging from './components/MessagingComponent/Messaging'
import {CSSTransition,TransitionGroup,} from 'react-transition-group';
import uuid from 'uuid';


// import Manager from '../src/components/ManagerComponent/Manager'

import TwoDoMotherBoard from '../src/components/TwoDoComponent/TwoDoMotherBoard'
import Home from './components/HomeComponent/Home';
// import Msging from './components/MessagingComponent/Msging'
import Relax from './components/RelaxComponent/Relax';
import './App.css';


function App() {


  return (
    <Router>
    <div className="app">

<Route render={(location)=> (
 <TransitionGroup>
 <CSSTransition
 key={location.key}
           timeout={300}
           classNames="item">


      <Switch>
          <Route exact path='/' component={One} />
          <Route path='/rooms/:roomId' component={Messaging} />
        
          <Route path='/:roomId/home' component={Home} />
          <Route exact path='/:roomId/video' component={TwoDoMotherBoard} />
          <Route exact path='/:roomId/balance' component={Relax} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
)} />
      </div>
    </Router>
         

   
  );
}

export default App;
