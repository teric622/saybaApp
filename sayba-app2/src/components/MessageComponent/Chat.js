import React, {useState, useEffect} from 'react'
import './Chat.css';
import { Avatar} from "@material-ui/core";



//   5000 = amount of charecters in the api

function Chat() {
    const [input, setInput] = useState("");
const [seed, setSeed] = useState('');

useEffect(() => {
   setSeed( Math.floor( Math.random() * 5000)); 
}, []);

const sendMessage = (e) => {
e.preventDefault();
console.log("You typed >>>", input);
setInput("");
}




    return (
        <div className="chat">
          <div className="chat__header">
          <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

          <div className ="chat__headerInfo">
              <h3> Room name</h3>
              <p> Last seen at...</p>
          </div>
          </div>
          {/* The user will be messaging seperatly, ex: I may say "hi friend says "Hola" 
          I dont want the messages to overlap and be right under eachother, 
          creating seperate divs will render 
          to be far to much and will overlap if all are given same name,
          we need to mess with the css, but based on the research lets use p classes 
          for the messages instead of regular div classes : ))) don't give up and 
          of course as you do, please don't overthink :)))))) */}
                  <div className="chat__body">
                  <p className= {`chat__message ${true &&
                  'chat__reciever'}`}>
                  <span className="chat__name">Sonny Sangha
                  </span>
                      Hey Guys
                
                  <span className="chat__timestamp">3:52pm
                  </span>
                  </p>
                  </div>
          <div className="chat__footer">
              <form>
                  {/* when the user hits the enter key, and message to connect to db store it in state to be used constntly */}
                  {/* need to keep track of the change made when user sends a mssg an event goes off, onChange should do the trick */}
                  {/* event will have to update the input variable, e.target.value needed to update to latest message */}
                  <input value={input}  onChange={(e) => 
                    setInput(e.target.value) }type="text"/>
                  <button onClick={sendMessage} 
                  type="submit" className="smg"> Send a message</button>
              </form>
          </div>
        </div>

    );
}

export default Chat
