import React from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
// this page will be the sidebar as a whole and will hold and import components for the sidebar to make it one whole
// Here the pie is made from the rest of the pieces that will be put together


function Sidebar() {
    return (
        <div className = "sidebar">
        
        {/* <div className = "sidebar__header"> 
        
        </div> */}

        <div className = "sidebar__search"> 
        <div
         className="sidebar__searchContainer">
      <SearchIcon/>
       <input placeholder="Search" type="text"/>  
         </div>
        </div>
        
        <div className = "sidebar__chats"> 
        <SidebarChat addNewChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        </div>
        

        </div>
    )
}

export default Sidebar
