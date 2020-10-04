import React from 'react'
import TwoDo from './TwoDo';


function TwoDoLists({todos, setTodos}) {
    return (
        <div className="todo-container">
            <ul class="todo-list">
                {todos.map(todo => ( 
                        <TwoDo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} id={todo.id}/>
                ))}

            </ul>
        </div>
    )
}

export default TwoDoLists
