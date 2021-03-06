import React from 'react'
import Header from '../HeaderComponent/Header'
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Messaging.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// mainjs file of this page

function Messaging() {
    return (
        <div className="messageh">
        <Header/>

        <div className="messaging">
                   <div className="messaging__body">
                       
                       <Sidebar/>
                      <Chat/>
                    
                   </div>
               
        </div>
        </div>
    )
}

export default Messaging
