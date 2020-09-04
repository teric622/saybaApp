import React, {useEffect,useState}  from 'react'
import './Sidebar.css'
// import {Avatar} from "@material-ui/core";
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
// import ChatIcon from '@material-ui/icons/Chat';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'
import db from '../../firebase';


function Sidebar() {
    const [rooms, setRooms] = useState([]);
// Dont want code to keep pushing up, and refreshing every single time
// a new room is made, this will make user experience horrible
// bc if the users browser continus to struggle loading everything
// they will give up on the app
    useEffect ( () => {
        // mapping through firebase database collections, getting information from it 
        db.collection('rooms').onSnapshot
        (snapshot => ( setRooms(snapshot.docs.map(doc =>
            ({
               id: doc.id, 
               data: doc.data(),
            })
        ))
        ))
        }, [] )


    return (
        <div className="sidebar">
           <div className="sidebar__header">

<div className="sidebar__headerRight">

              </div>
           </div>

           <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                  <SearchIcon/>
                    <input placeholder="Search">
</input>
                </div>
           </div>
            <div className="sidebar__chats">
            
               <SidebarChat addNewChat/> 
               {rooms.map(room => (
                   <SidebarChat key={room.id} id={room.id}
                   name={room.data.name} />
               ))}
              

            </div>

        </div>
    )
}

export default Sidebar
