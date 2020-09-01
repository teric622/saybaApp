


import React from 'react';
import Header from '../HeaderComponent/Header'
import '../../App.css';
import Feed from '../../components/FeedComponent/Feed';
import Login from '../LoginComponent/Login';
import {useStateValue} from "../../StateProvider";
import  './One.css';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function One() {
    const [{user}, dispatch] = useStateValue();
    return (
        (
            <div className="one">
              {!user ? (
              <Login/>
              ) : (
                <>  
               <Header/>
              <div className="app__body">
            
              <Feed/>
                
            </div>
            </>
              )}
              </div>
        )
        );
    }

export default One
