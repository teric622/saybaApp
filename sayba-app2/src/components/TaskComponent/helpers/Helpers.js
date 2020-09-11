import { collatedTasks} from '../constants/Constants';



export const collatedTasksExist = selectedProject =>
    collatedTasksExist.find(task => task.key === selectedProject);