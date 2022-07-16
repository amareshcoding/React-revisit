import React from 'react';
import { useState } from 'react';
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md';

const Todolist = ({ todo, onDelete, onUpdate }) => {
  const [isDone, setIsDone] = useState(todo.isDone);
  // console.log(isDone);
  return (
    <div className="todo_div">

      <MdCheck className="todo_icon" onClick={(e) =>{
        setIsDone(!isDone); 
        todo.isDone = !isDone;
        
        onUpdate(todo.id, todo);
      } }></MdCheck>
  
      <h4 className={isDone ? 'striked' : 'todo_text'}>{todo.item}</h4>

      <MdEdit className="todo_icon" />

      <MdDelete className="todo_icon" onClick={() => onDelete(todo.id)} />
    </div>
  );
};

export default Todolist;
