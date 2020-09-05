import React, {useEffect, useState} from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core';
// This page will carry the list of the groups in the sidebar
function SidebarChat({id, name ,addNewChat}) {
const [seed, setSeed]= useState('');


    useEffect(() => {
        setSeed( Math.floor( Math.random() * 5000));
     }, []);
// a pop up should show up for the user once they click "+ Room"
     const createChat = () => {
         const roomName = prompt("Please enter name for chat");
// if the user enters something in the roomname
         if (roomName){
        //  some clever database stuff
     }
     };

// Random charecter should also be in here for app consistency
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
           <div className="sidebarChat__info">
               <h2>{name}</h2>
               <p> Last message...</p>
           </div>
        </div>
    ): (
        // when user hits this, a new chat group will be made
        <div onClick={createChat}
        className="sidebarChat">
         <h2> Add chat</h2>
        </div>
    )
}

export default SidebarChat
