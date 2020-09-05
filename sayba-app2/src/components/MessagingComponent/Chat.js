import {Avatar} from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import './Chat.css';
// This will be were the messages show up 
// and where user will type messages and where the current room name will be displayed 

function Chat() {
    const [input, setInput] = useState ("");
    const [seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000 ));
    }, []);

    const sendMessage = (e) => {
 e.preventDefault();
 console.log('You typed >>>', input);
 
 setInput("");
    };
    return (
        <div className="chat">
          <div className="chat__header">
          <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          {/* Where text will be located for header of the chat */}
          <div className="chat__headerInfo">
           <h3> Room name</h3>
           <p> Last seen at ...</p>
          </div>
          </div>

          <div className="chat__body">
         {/* need algorithm to integrat if its the user that signed in, then this will 
         be true and will have messages of prple color */}
          <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className="chat__name">Sonny Sangna</span>
              Hey Guys
              <span
              className="chat__timestamp">
                  3:52pm
              </span>
          </p>
          
          </div>

          <div className="chat__footer">
<form>
    <input value={input} 
    onChange={e => setInput(e.target.value) }
    placeholder="Typa a message" 
    type="text" 
    />

    <button onClick={sendMessage} 
    type="submit" className="smg">Send Message</button>
</form>
          </div>
        </div>
    )
}

export default Chat
