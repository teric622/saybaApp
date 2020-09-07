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
import AssignmentIcon from '@material-ui/icons/Assignment';
import ForumIcon from '@material-ui/icons/Forum';
import {useStateValue} from "../../StateProvider";
import {Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
        
        <div className="header__right">
             <div className="header__info">
                {/* src="https://www.latinheat.com/wp-content/uploads/2013/01/Mario.500.jpg" */}
               
                 {/* <h4>Eric Tlaseca - Morales
                      </h4> */}
             </div>
             <IconButton>
                 {/* <AddIcon /> */}
             </IconButton>

        </div>
       
        <div className="header__center">
          <Link to="/:roomId/home"  className="header__option">
            <div className="header__option">
             <div className="header__option">
            <HomeIcon fontSize="large"/>
            </div>
            </div>
            </Link>

           <Link to="/rooms/:roomId"  className="header__option">
            <div className="header__option">
            <ForumIcon fontSize="large"/>
            </div>
            </Link>      

            <Link to="/:roomId/video"  className="header__option">
            <div className="header__option">
            <VideoCallIcon fontSize="large"/>
            </div>
            </Link>
            <Link to= "/:roomId/explore"  className="header__option">
            <div className="header__option">
            <AssignmentIcon fontSize="large"/>
            </div>
            </Link>

    
{/* 
            <div className="header__option">
            < SupervisedUserCircleIcon fontSize="large"/>
            </div> */}
        </div>
        {/* <Avatar src={user.photoURL}/>
       <h4>{user.displayName} 
       </h4>  */}
       {/* user.display displays name on header photourl GETS GOOGLE IMAGE USER SIGNED IN WITH */}
        </div>
    )
}

export default Header;
