import React from 'react';
import Todo from '../components/Todo'

const TodoList = (props) =>{
  const todos=props.tasks.map((todo,index)=>{
    return <Todo 
    content={todo} 
     id={index}
    onDelete={props.onDelete}
    onComplete={props.onComplete} />
  })
  return(
    <div className='task-list'>
      {todos}
    </div>
  )
}
export default TodoList;