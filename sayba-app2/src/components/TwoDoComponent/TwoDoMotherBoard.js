import React, {useState}from 'react'
import './TwoDo.css'
import Header from '../HeaderComponent/Header';
import Form from '../TwoDoComponent/Form';
import TwoDoLists from '../TwoDoComponent/TwoDoLists';




function TwoDoMotherBoard() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <div className="Twodo">
        <div className="Twodo__header">
            <Header/>
            </div>
            <div>
            <h2>To do</h2>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
            <TwoDoLists setTodos={setTodos} todos={todos}/>
        </div>
        </div>
    )
}

export default TwoDoMotherBoard
// 11:09

