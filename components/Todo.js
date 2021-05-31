import React from 'react'
const Todo = (props)=>{
 const buttonStyle={
     padding : '2px',
     marginLeft : '15px' ,
    float: 'right'
 }

 const listStyle={
  border: '1px solid grey',
  margin: "0 auto",
  marginTop:"5px",
  marginBottom:"5px",
  padding: '8px',
  width: '450px',
  textAlign:'left',
 }
  return(
    <div style={listStyle} className='list-items'>
      {props.content}
      <button style={buttonStyle} className='delete-task' onClick={() => {props.onDelete(props.id)}}>❌</button>
      <button style={buttonStyle} className='complete-task' onClick={() => {props.onComplete(props.id,props.content)}}>✔️</button>
    </div>
  )
}
export default Todo;