import React from 'react'
import Header from "../HeaderComponent/Header"
import './Message.css'
import Sidebar from './Sidebar'



function Message() {
    return (
     
        <div className="messageh">
               <Header/>
<div className="message">
             
            <div className="message__body">
         <Sidebar/>
          

{/* {Chat} */}
            </div>
            </div>
        </div>
    )
}

export default Message
