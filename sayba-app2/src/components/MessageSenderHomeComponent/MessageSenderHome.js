import React from 'react'
import './MessageSenderHome.css'
import {Avatar,} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSenderHome() {
// e.preventDefault prevents refresh when user clicks
    const handleSubmit =e =>{
        e.preventDefault();
    };

    return (
        <div className="messageSenderHome">
            <div className="messageSenderHome__top">
             {/* <Avatar/> */}
                <form>
                    <input 
                    className="messageSenderHome__input"
                    placeholder={`what's on your mind ?`}
                    />
                    <input placeholder="image URL (optional)"/>
             
                        {/* <button onClick={handleSubmit} type="submit">
                            Hidden submit
                        </button> */}
                      </form>


            </div>

<div className="messageSenderHome__bottom">

<div className="messageSenderHome__option">
    <VideocamIcon style={{color:"red"}}/>
    <h3>Live Video</h3>
</div>

<div className="messageSenderHome__option">
    <PhotoLibraryIcon style={{color:"green"}}/>
    <h3>Photo/Video</h3>
</div>

<div className="messageSenderHome__option">
    <InsertEmoticonIcon style={{color:"orange"}}/>
    <h3>Feeling/Activity</h3>
</div>

</div>

        </div>
    )
}

export default MessageSenderHome
