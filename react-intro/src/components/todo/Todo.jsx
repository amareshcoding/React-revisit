import React from 'react';
import { useState } from 'react';
import '../../style/Todo.css';
import Todoinput from './Todoinput';
import Todolist from './Todolist';
const axios = require('axios');


const Todo = () => {
  const [todo, setTodo] = useState([]);

  const deleteHandle = (todoid) => {
    const afterDelete = todo.filter((e) => {
      return e.id !== todoid;
    });

    setTodo(afterDelete);
  };

  const Showtodo = () => {
    return (
      <div className="todo_container">
        {todo.map((e) => {
          return <Todolist key={e.id} todo={e} onDelete={deleteHandle} />;
        })}
      </div>
    );
  };

  return (
    <div style={{ margin: 10 }}>
      <Todoinput todo={todo} setTodo={setTodo} />
      <Showtodo />
    </div>
  );
};

export default Todo;

//rafc--> Arrow function

//read input
//update todos list
//re-render todos list when update
//https://course.masaischool.com/lectures/27774
