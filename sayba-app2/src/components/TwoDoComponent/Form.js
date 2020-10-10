import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import DoneIcon from '@material-ui/icons/Done';

function Form({setInputText,  inputText, todos, setTodos, setStatus}) {


  const inputTextHandler = (e) => {
 
    setInputText(e.target.value);
  };
    const submitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 10000)}
    ])
      setInputText("");
    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }



    return (
        <div>
        <form className="add">
        <input value={inputText}onChange={inputTextHandler}type="text" className="todo-input" placeholder="What's the plan for today" />
        <button onClick={submitTodoHandler}className="todo-button" type="submit">
       <AddBoxIcon/>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos"  className="filter-todo">
            <option value="all">All</option>
    <option value="completed">Done</option>
            <option value="uncompleted">Left</option>
          </select>
        </div>
      </form>
      </div>
    )
}

export default Form
