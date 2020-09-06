import {Avatar} from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import './Chat.css';
import {useParams} from "react-router-dom"
import db from '../../firebase';
import firebase from "firebase";
import { useStateValue } from '../../StateProvider';
// This will be were the messages show up 
// and where user will type messages and where the current room name will be displayed 

function Chat() {
    const [input, setInput] = useState ("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const[messages, setMessages] =useState ([]);
    const [{user}, dispatch] = useStateValue();

// Just needed a ? so it would be ?.name bc there may not be a group automaticaaly and will show undefined, thats why ? was needed lmao 
useEffect(() => {
if (roomId)  {    
 db.collection('rooms').doc(roomId).onSnapshot((snapshot) => 
        setRoomName(snapshot.data()?.name));

        db.collection("rooms").doc(roomId)
        .collection("messages").orderBy
        ("timestamp", "asc").onSnapshot((snapshot) => 
    setMessages(snapshot.docs.map((doc) => doc.data () ))
        );
}
},
 [roomId]);

// 34-36 declaring to change avatar when new room is clicked
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000 ));
    }, [roomId]);

    const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>>', input);
    // this will allow user message to automatically be gotten from the db
    // go to the firebase collection, go into the room document, look for the unique room id's,
    // in there go to the message document, and to them add the message user made on app, along with their name
    // user.display name is coming from the authentication process
    db.collection('rooms').doc(roomId).collection ('messages').add({
       message: input,
       name: user.displayName,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });


 setInput("");
    };
    return (
        <div className="chat">
          <div className="chat__header">
          <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          {/* Where text will be located for header of the chat */}
          <div className="chat__headerInfo">
           <h3> {roomName}</h3>
           {/* last seen needs to be retirated to the timestamp of the last message */}
           <p> Last seen {""}
               {new Date(
                   messages[messages.length-1]?.timestamp?.toDate() ).toUTCString()}
           </p>
          </div>
          </div>

          <div className="chat__body">
         {/* need algorithm to integrat if its the user that signed in, then this will 
         be true and will have messages of prple color */}

         {/* so that hard code goes away and we actuall get info from db
               go to the message document  {message.name} get the name of the user from
               the moment they log in and use that as there name for the messages
               {message.message} now that you have the name, get the messages sent by that specific user in the chat
               and get the timestamp of when that user sent the message
         */}

         {messages.map(message=> (
        //  <p classname row: if the messages name is = to the userdisplay name from google authentication
        // state it as being from the user that sent it, therfore making the color purple
          <p className={`chat__message ${message.name === user.displayName&&'chat__reciever'}`}>
          <span className="chat__name">{message.name}</span>
              {message.message}
              <span
              className="chat__timestamp">
                  {new Date(message.timestamp?.toDate()).toUTCString()}
              </span>
          </p>
         ))}
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
