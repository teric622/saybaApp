import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import db from '../../firebase';

// this page will be the sidebar as a whole and will hold and import components for the sidebar to make it one whole
// Here the pie is made from the rest of the pieces that will be put together


function Sidebar() {
    const[rooms, setRooms] =useState ([]);

 useEffect(() => {
     db.collection("rooms").onSnapshot((snapshot) => setRooms(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
     );
        }, []);
        
    return (
        <div className = "sidebar">
        
        {/* <div className = "sidebar__header"> 
        
        </div> */}

        <div className = "sidebar__search"> 
        <div
         className="sidebar__searchContainer">
      {/* <SearchIcon/> */}
       {/* <input placeholder="Search" type="text"/>   */}
         </div>
        </div>
        
        <div className = "sidebar__chats"> 
        <SidebarChat addNewChat/>
        {rooms.map(room => (
        <SidebarChat key={room.id} id={room.id}
        name={room.data.name}/>
        ))}
       
        </div>
        

        </div>
    )
}


export default Sidebar
