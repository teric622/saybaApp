import React from 'react';
import Header from './components/HeaderComponent/Header'
import './App.css';
import Feed from './components/FeedComponent/Feed'
import Login from '../src/components/LoginComponent/Login'
import {useStateValue} from "../src/StateProvider";

function App() {
 const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
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


   
  );
}

export default App;
