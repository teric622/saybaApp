import React from 'react'
import './Feed.css'
import StoryReel from '../StoryReelComponent/StoryReel'
import MessageSenderHome from '../MessageSenderHomeComponent/MessageSenderHome'

function Feed() {
    return (
        <div className="feed">
           <StoryReel/>
           <MessageSenderHome/>
            
        </div>
    )
}

export default Feed
