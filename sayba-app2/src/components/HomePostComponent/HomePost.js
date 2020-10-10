import React, {useState, useEffect} from 'react'
import './HomePost.css';
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// 243 side widget
function HomePost({profilePic, image, username, timestamp,
     message}) {
        const [seed, setSeed] = useState('');

        useEffect(() => {
           setSeed( Math.floor( Math.random() * 5000));
        }, []);
    return (
        <div className="post">
            <div className="post__top">
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}
            className="post__avatar"/>
             <div className="post__topInfo">
               <h3>{username}</h3>
               {/* Time stamp to show upto date in <p> */}
    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>                  
             </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
             <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                {/* <ThumbUpIcon />
                    <p>Like</p> */}
                </div>

                <div className="post__option">
                {/* <ChatBubbleOutlineIcon />
                    <p>Comment</p> */}
                </div>
                <div className="post__option">
                {/* <NearMeIcon />
                    <p>Share</p> */}
                </div>
                <div className="post__option">
               {/* < AccountCircleIcon/>
              < ExpandMoreIcon/> */}
                </div>
            </div>
        </div>
    )
}

export default HomePost
