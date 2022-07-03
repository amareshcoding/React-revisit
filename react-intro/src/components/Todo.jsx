import React from 'react';
import { useState } from 'react';

const Todo = () => {
  const [newtodo, setNewtodo] = useState('');
  //   console.log('newtodo: ', newtodo);
  const [todo, setTodo] = useState([]);
  console.log('todo: ', todo);

  //   const addTodo = () => {
  //     todo.push({
  //       id: new Date(),
  //       item: newtodo,
  //       isDone: false,
  //     });
  //     setTodo(todo);
  //   };

  const Showtodo = () => {
    return (
      <div>
        {todo.map((e) => {
          return (
            <div key={e.id}>
              <h4>{e.item}</h4>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />
      <button
        onClick={() => {
          // addTodo();
          setTodo([
            ...todo,
            {
              id: new Date(),
              item: newtodo,
              isDone: false,
            },
          ]);
          setNewtodo('');
        }}
      >
        Add Todo
      </button>
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