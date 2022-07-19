import React from 'react'
import { todolist } from './model';
import SingleTodo from './SingleTodo';
import"./styles.css";
interface Props{
    todos:todolist[],
    setTodos:React.Dispatch<React.SetStateAction<todolist[]>>
}
const Todolist:React.FC<Props>= ({todos,setTodos}) => {
  return (
    <div className='todos'>
 {todos.map((todo)=>(
 <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
 ))}
    </div>
  )
}

export default Todolist