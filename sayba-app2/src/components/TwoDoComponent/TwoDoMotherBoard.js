import React, {useState, useEffect}from 'react'
import './TwoDo.css'
import Header from '../HeaderComponent/Header';
import Form from '../TwoDoComponent/Form';
import TwoDoLists from '../TwoDoComponent/TwoDoLists';




function TwoDoMotherBoard() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState ([]);

 useEffect(() => {
     getLocalTodos();
 }, []);




useEffect (() => {
    filterHandler();
    saveLocalTodos();
}, [todos, status]);



    const filterHandler = () => {
        switch(status){
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
                case "uncompleted":
                    setFilteredTodos(todos.filter(todo => todo.completed === false));
                    break;
                    default: 
                    setFilteredTodos(todos);
                    break;
        }
    };

    const saveLocalTodos = () => {
        if(localStorage.getItem("todos") ===null){
            localStorage.setItem("todos", JSON.stringify([]));
        }else{
         localStorage.setItem("todos", JSON.stringify(todos));
        }
        }

        const getLocalTodos = () => {
            if(localStorage.getItem("todos") ===null){
                localStorage.setItem("todos", JSON.stringify([]));
            }else{
               let todoLocal= JSON.parse(localStorage.getItem("todos"))
               setTodos(todoLocal);
            }
        }

    return (
        <div className="Twodo">
        <div className="Twodo__header">
            <Header/>
            </div>
            <div>
            <h2>To do</h2>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
            <TwoDoLists setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
        </div>
        </div>
    )
};

export default TwoDoMotherBoard
// 11:09

