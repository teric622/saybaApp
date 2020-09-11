import { useEffect, useState } from 'react';
// import db, {firebase} from '../../../firebase';
import { firebase } from '../../../firebase';
import {collatedTasksExist} from '../helpers/Helpers';
import moment from 'moment';

export const useTasks = selectedProject => {
    const [task, setTasks] = useState([]);

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

}, [selectedProject]);


}