import { useEffect, useState } from 'react';
// import db, {firebase} from '../../../firebase';
import { firebase } from '../../../firebase';
import {collatedTasksExist} from '../helpers/Helpers';
import moment from 'moment';

export const useTasks = selectedProject => {
    const [task, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);


useEffect(() => {

let unsubscribe = firebase
.firestore()
.collection('tasks')
.where('userId', '==','jllFXtwyAL3tzHMtzRbw' );


unsubscribe = selectedProject &&  !collatedTasksExist(selectedProject)? 
(unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
: selectedProject === 'TODAY'
? (unsubscribe = unsubscribe.where
    ('date', '==',moment().format('DD/MM/YYY')
    ))

:selectedProject === 'INBOX' || selectedProject === 0
? (unsubscribe = unsubscribe.where('date', '==', ''))
: unsubscribe;


unsubscribe = unsubscribe.onSnapshot (snapshot => {
    const newTasks = snapshot.docs.map (task => ({
    id: task.id,
    ...task.data(),
    }));

   setTasks (
       selectedProject === 'NEXT_7'
       ? newTasks.filter(
task => 
moment (task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
task.archived !==true
       )
        : newTasks.filter(task => task.archived !==true)
   );



   setArchivedTasks(newTasks.filter(task => task.archived !== false))

});

}, [selectedProject]);


};

// 59:09  = vidk 3909 895u 8302-jn hb uuu9n hbu9j