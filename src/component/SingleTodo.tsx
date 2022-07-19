import React from 'react'
import { todolist } from './model'
type Props={
    todo:todolist,
    todos:todolist[],
setTodos:React.Dispatch<React.SetStateAction<todolist[]>>
}
const SingleTodo = ({todo,
    todos,setTodos}:Props) => {
  return (
    <div>SingleTodo</div>
  )
}
export default SingleTodo