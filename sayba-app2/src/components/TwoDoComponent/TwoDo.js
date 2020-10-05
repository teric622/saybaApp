import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

function TwoDo({text, todo, todos, setTodos}) {

const deleteHandler = () => {
 setTodos(todos.filter((el) => el.id !== todo.id))
// console.log(todo)
};

const completeHandler = () =>{
  setTodos(todos.map(item => {
     if(item.id === todo.id){
        return{
            ...item, completed: !item.completed
        }
    }
    return item;
}))
}

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
                 <button  onClick={completeHandler} className="todocomplete__btn">
                     <CheckRoundedIcon/>
                 </button>

                 <button onClick={deleteHandler} className="tododelete__btn">
                     < DeleteRoundedIcon/>
                 </button>
   
        </div>
    )
}

export default TwoDo
