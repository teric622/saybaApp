import React, {useState} from 'react'
import './Feed.css'
import StoryReel from '../StoryReelComponent/StoryReel'
import MessageSenderHome from '../MessageSenderHomeComponent/MessageSenderHome'
import HomePost from '../../components/HomePostComponent/HomePost'
import db from "../../firebase"


function Feed() {
    const [post, setPosts ] =([]);

// use effect function will only run code once when feed component loads
// Following will map to the databas and state
useEffect (()=>{
    db.collection("posts").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data:doc.
        data() })))
    );
}, []);

    

    return (
        <div className="feed">
           <StoryReel/>
           <MessageSenderHome/>
           
            <HomePost
            profilePic='https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg'
            message='wow this works'
            timestamp='This is a timpestamp'
            username='barack obama'
            image='https://i2.wp.com/www.chronic-wanderlust.com/wp-content/uploads/2018/07/USA-an-was-ich-mich-nicht-gewo%CC%88hnen-kann.jpg?fit=1170%2C878&ssl=1'
            />
            <HomePost/>
            <HomePost/>
        </div>
    )
}
// 3:29:00

export default Feed
