import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ExploreIcon from '@material-ui/icons/Explore';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import {Avatar, IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
        
        <div className="header__right">
             <div className="header__info">
                 <Avatar/>
                 <h4>Eric Tlaseca - Morales
                      </h4>
             </div>
             <IconButton>
                 {/* <AddIcon /> */}
             </IconButton>

        </div>
       
        <div className="header__center">
          
            <div className="header__option">
             <div className="header__option--active">
            <HomeIcon fontSize="large"/>
            </div>
            </div>
           
            <div className="header__option">
            <ForumIcon fontSize="large"/>
            </div>
            
            <div className="header__option">
            <VideoCallIcon fontSize="large"/>
            </div>
            
            <div className="header__option">
            <ExploreIcon fontSize="large"/>
            </div>
{/* 
            <div className="header__option">
            < SupervisedUserCircleIcon fontSize="large"/>
            </div> */}
        </div>
       
       
        </div>
    )
}

export default Header;
