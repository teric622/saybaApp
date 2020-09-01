import React,{useState} from 'react'
import './MessageSenderHome.css'
import {Avatar,} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "../../StateProvider";

function MessageSenderHome() {
    const [{user}, dispatch] = useStateValue();
    const[input, setInput] = useState();
    const[imageUrl, setImageUrl] = useState("");

// e.preventDefault prevents refresh when user clicks
    const handleSubmit = (e) =>{
        e.preventDefault();
   

    // some clever db stuff
    setInput("");
    setImageUrl("");
};

    return (
        <div className="messageSenderHome">
            <div className="messageSenderHome__top">
             <Avatar src ={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange= {(e) => setInput (e.target.value) }
                    className="messageSenderHome__input"
                    placeholder={`what's on your mind, ${user.displayName}?`}
                    />
                    {/* <input
                     value={imageUrl}
                     onChange= {(e) => setImageUrl (e.target.value) }
                     placeholder="image URL (optional)"/> */}
             
                        <button onClick={handleSubmit} type="submit">
                            Hidden submit
                        </button>
                      </form>


            </div>

<div className="messageSenderHome__bottom">

<div className="messageSenderHome__option">
    
    <VideocamIcon style={{color:"red"}}/>
    <h3>Video</h3>
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
// 320

export default MessageSenderHome
