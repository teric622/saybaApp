import React from 'react';
import Header from './components/HeaderComponent/Header'
import './App.css';
import Feed from './components/FeedComponent/Feed'



function App() {
  return (
    <div className="app">
       <Header/>
      <div className="app__body">
    
      <Feed/>
        {/* Feed */}
    </div>
      </div>


   
  );
}

export default App;
