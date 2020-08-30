import React from 'react'
import './StoryReel.css'
import Story from '../StoryComponent/Story'



function StoryReel() {
    return (
        <div className="storyReel">
            <Story
           image="https://www.publicdomainpictures.net/pictures/50000/velka/sunset-profile-background.jpg"
            profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Sony Sangha"
            />

            <Story
           image="https://s3.amazonaws.com/bucketeer-4de657b8-6d51-4a8d-9fee-1b876d2bfe98/magazine/wp-content/uploads/2019/11/22103353/iStock-1153641199.jpg"
            profileSrc="https://www.eikonphoto.com/wp-content/uploads/2017/03/BP-Walker-4021.jpg"
            title="Rafeh Qazi"
            />


            <Story
           image="https://cdn3-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg"
            profileSrc="https://www.grace.edu/wp-content/uploads/2020/08/RD-Headshots-P00382-6-scaled-e1597160990499.jpg"
            title="Frankie"
            />


     
           
        </div>
    )
}

export default StoryReel
