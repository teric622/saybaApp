import React, {useEffect, useState} from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core';
import db from '../../firebase';
import { Link } from 'react-router-dom';
// This page will carry the list of the groups in the sidebar
function SidebarChat({id, name ,addNewChat}) {
const [seed, setSeed]= useState('');
const [messages, setMessages] = useState("");

// Here our goal is to get the most recent message to
// display on the sidebar

useEffect(() => {
if (id) {
    db.collection('rooms').doc(id).collection
    ('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
      setMessages(snapshot.docs.map((doc) => doc.data()))
    );
}
}, [])



    useEffect(() => {
        setSeed( Math.floor( Math.random() * 5000));
     }, []);
// a pop up should show up for the user once they click "+ Room"
     const createChat = () => {
         const roomName = prompt("Please enter name for chat room " );
// if the user enters something in the roomname
         if (roomName){
        //  some clever database stuff
        db.collection('rooms').add({
           name: roomName,
        });
     }
     };

// Random charecter should also be in here for app consistency
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
    <div className="sidebarChat">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
           <div className="sidebarChat__info">
               <h2>{name}</h2>
               <p>{messages[0]?.message}</p>
           </div>
        </div>
        </Link>
    
    ): (
        // when user hits this, a new chat group will be made
        <div onClick={createChat}
        className="sidebarChat">
         <h2> Add chat</h2>
        </div>
    )
}

export default SidebarChat
