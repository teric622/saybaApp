import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import {Avatar} from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState('');

useEffect(() => {
   setSeed( Math.floor( Math.random() * 5000));
}, []);

const createChat = () => {
const roomName = prompt ("please enter name for chat");

        if (roomName){
            // do sum in db with firebase
        }
};

// Every time a new room is made, it will generate a random charecter based on the 
// algorithm made above
    return  !addNewChat?(
        <div className="sidebarChat">
           <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
           {/* Avatar src goal is to be random regradless of chat, to do so, we will need
           a function that will pass state*/}
           {/* Math Random will need to be used to render charecters at random times  */}
         <div className="sidebarChat__info">
             <h2> {name} </h2>
             <p> Last message...</p>
         </div>
         </div>
    ): (
        <div onClick= {createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
        }


export default SidebarChat
