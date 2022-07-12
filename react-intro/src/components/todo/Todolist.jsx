import React from 'react';
import { useState } from 'react';

const Todolist = ({ todo, onDelete }) => {
  const [isDone, setIsDone] = useState(todo.isDone);
  return (
    <div className="todo_div">
      <input
        type="checkbox"
        checked={isDone}
        className="todo_check"
        onChange={(e) => setIsDone(e.target.checked)}
      />
      <h4 className={isDone ? 'striked' : 'todo_text'}>{todo.item}</h4>
      <button className="todo_btn" onClick={() => onDelete(todo.id)}>
        Del
      </button>
    </div>
  );
};

export default Todolist;
