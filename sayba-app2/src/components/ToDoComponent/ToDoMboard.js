import React from 'react'
import Header from '../HeaderComponent/Header';
import TodoForm from '../ToDoComponent/TodoForm';
import TodoList from './TodoList';
import './Todo.css';


function ToDoMboard() {
    return (
        <div className="">
            <Header/>

            <TodoList/>
        </div>
    )
}

export default ToDoMboard

