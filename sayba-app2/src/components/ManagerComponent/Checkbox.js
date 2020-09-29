import db from '../../firebase'
import React from 'react';

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
         db.collection('tasks').doc(id).update({
             archived: true,
         });
    };    
    return(
        <div className= "checkbox-holder"
        onClick={()=> archiveTask()}>
           <span className="checkbox" />
        </div>
    )


}