import React from 'react'
import './Sidebar.css'
import {Avatar} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
<Avatar/>
<div className="sidebar__headerRight">
<DonutLargeIcon/>
<ChatIcon/>
<MoreVertIcon/>
              </div>
           </div>

           <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                  <SearchIcon/>
                    <input placeholder="Search or start new chat">
</input>
                </div>
           </div>
            <div className="sidebar__chats">
            
               <SidebarChat/> 
               <SidebarChat/> 
               <SidebarChat/> 
               <SidebarChat/> 

            </div>

        </div>
    )
}

export default Sidebar
