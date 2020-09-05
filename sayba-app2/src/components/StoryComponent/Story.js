import React, {useState,useEffect} from 'react'
import './Story.css'
import {Avatar,} from '@material-ui/core'



function Story({image,profileSrc, title}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
       setSeed( Math.floor( Math.random() * 5000));
    }, []);
    return (
        <div style={{backgroundImage: `url(${image})`}} 
        className="story">
             <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
