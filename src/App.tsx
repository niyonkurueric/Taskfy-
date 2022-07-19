import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import {todolist} from "./component/model"
import Todolist from './component/Todolist';
const App:React.FC=()=>{
  const [todo,setTodo]=useState<string>("");
   const [todos,setTodos]=useState<todolist[]>([]);
 const handleAdd=(e:React.FormEvent)=>{
   e.preventDefault();
   if(todo){
    setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
    setTodo("")
   }
   console.log(todos)
 }
  return (
    <div className='App'>
   <span className="heading">TaskFy</span>
   <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
  <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
