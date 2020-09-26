import React from 'react'
import {Checkbox} from '../Checkbox';
import { useTasks } from '../hooks/hooks';

// problem starts here
export const Tasks = () => {
    const { tasks } = useTasks('1');



    const projectName ='';

    return (
        <div className="tasks">
            <h2 data-testid="projects-name">{projectName}</h2>


            <ul className="tasks__list">
                {tasks.map(task=> (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}/>
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}