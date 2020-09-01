import React,{useState} from 'react'
import './MessageSenderHome.css'
import {Avatar,} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "../../StateProvider";
import db from "../../firebase";
import firebase from "firebase";




function MessageSenderHome() {
    const [{user}, dispatch] = useStateValue();
    const[input, setInput] = useState();
    const[imageUrl, setImageUrl] = useState("");

// e.preventDefault prevents refresh when user clicks
// functionality so that user can add post, that way we dont need no hard code and their post will be rendered to their local time regardless of where they are
    const handleSubmit = (e) =>{
        e.preventDefault();
   
       db.collection ('posts').add({
        //    hitting db from firestore
        message:input,
        // hitting the timestamp
        timestamp: firebase.firestore.FieldValue.
        // server timestamp, timestamp of user their local time
        serverTimestamp(),
        // Getting users profile from google so when post is made it automatically shows in post
        profilePic: user.photoURL,
        // username: The name of the user on google
        username:user.displayName,
        // image, this will be what they
        image: imageUrl,
 

       })



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
                     <button onClick={handleSubmit} type="submit">
                            Hidden submit
                        </button>
                        <br/>
                        <br/>
                    <input
                     value={imageUrl}
                     onChange= {(e) => setImageUrl (e.target.value) }
                     placeholder="image URL (optional)"/>
             
                        
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

export default MessageSenderHome
