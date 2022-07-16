import React from 'react';
import { useState } from 'react'
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md';

const Todolist = ({ todo, onDelete }) => {
  const [isDone, setIsDone] = useState(todo.isDone);
  return (
    <div className="todo_div">
      {/* <FcCheckmark></FcCheckmark> */}

      <input
        type="checkbox"
        checked={isDone}
        className="todo_check"
        onChange={(e) => setIsDone(e.target.checked)}
      />
      <h4 className={isDone ? 'striked' : 'todo_text'}>{todo.item}</h4>
      <MdEdit className="todo_edit" />
      <MdDelete className="todo_btn" onClick={() => onDelete(todo.id)} />
    </div>
  );
};

export default Todolist;
