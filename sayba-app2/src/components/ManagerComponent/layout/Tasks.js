import React, { useEffect } from 'react'
import {Checkbox} from '../Checkbox';
import { useTasks } from '../hooks/hooks';
import {collatedTasks} from '../constants/constants';
import {getTitle, getCollatedTitle, collatedTasksExist} from '../helpers/helpers';
// import {useTasks} from '../hooks/hooks';
import {useSelectedProjectValue, useProjectsValue} from '../context/context';


// export const Tasks = () => {
//     const { selectedProject } = useSelectedProjectValue();
//     const { projects } = useProjectsValue();
//     const { tasks } = useTasks(selectedProject);
  
//     let projectName = '';
  
//     if (collatedTasksExist(selectedProject) && selectedProject) {
//       projectName = getCollatedTitle(collatedTasks, selectedProject).name;
//     }
  
//     if (
//       projects &&
//       projects.length > 0 &&
//       selectedProject &&
//       !collatedTasksExist(selectedProject)
//     ) {
//       projectName = getTitle(projects, selectedProject).name;
//     }
  
//     useEffect(() => {
//       document.title = `${projectName}: NezApp`;
//     });
  
//     return (
//       <div className="tasks" data-testid="tasks">
//         <h2 className ="projectd" data-testid="project-name">{projectName}</h2>
  
//         <ul className="tasks__list">
//           {tasks.map((task) => (
//             <li key={`${task.id}`}>
//               <Checkbox id={task.id} taskDesc={task.task} />
//               <span>{task.task}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );   
//   };
























// problem starts here
export const Tasks = () => {
    const { selectedProject} = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks('selectedProject');


    let projectName ='';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name; 
        // may need ? in between )?.
        console.log('projectName 1:', projectName);
    }

if (collatedTasksExist(selectedProject) && selectedProject){
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    console.log('projectName 2:', projectName);
}


useEffect(() => {
 document.title = `${projectName}: NezApp`
});

console.log('tasks', tasks);

    return (
        <div className="tasks">
            <h2 className="projects__name">{projectName}</h2>


            <ul className="tasks__list">
            {/* db.collection('projects')
        .where('userId', '==', 'jllFXtwyAL3tzHMtzRbw')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
          const allProjects = snapshot.docs.map(project => ({
            ...project.data(),
            docId: project.id,
          })); */}
  
            {projects.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
};