import React, {useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from '../StoryReelComponent/StoryReel'
import MessageSenderHome from '../MessageSenderHomeComponent/MessageSenderHome'
import HomePost from '../../components/HomePostComponent/HomePost'
import db from "../../firebase"


function Feed() {   
    const [posts, setPosts ] =useState([]);

// use effect function will only run code once when feed component loads
// Following will map to the databas and state
useEffect(() => { 
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => 
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, 
        data: doc.data() })))
    );
    }, []);
 
    

    return (
        <div className="feed">
            
           <StoryReel/>
           <MessageSenderHome/>

           {posts.map((post) => (
             <HomePost
             key={post.id}
             profilePic={post.data.profilePic}
             message={post.data.message}
             timestamp={post.data.timestamp}
             username={post.data.username}
             image={post.data.image}
             />
           ))}
</div>
           );
}
           


export default Feed
