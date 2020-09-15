import {collatedTasks} from '../constants/constants'


export const collatedTasksExist = selectedProject => 
    collatedTasks.find(task => task.key === selectedProject);
