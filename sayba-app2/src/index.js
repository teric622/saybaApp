import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducer";
// breath man just breath this is a scary place to mess with : )
// When the user signs in, push information into the data and pull it 
// from anywhere, regardless of the component and or file
 
 

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
     <App />
     </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
