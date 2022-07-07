import React from 'react';
import { useState } from 'react';
import '../../style/Todo.css';
import Todoitem from './Todoitem';

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
          return <Todoitem key={e.id} todo={e} onDelete={deleteHandle} />;
        })}
      </div>
    );
  };

  return (
    <div style={{margin:10}}>
      <input
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />
      <button
        onClick={() => {
          // addTodo();
          if (newtodo) {
            setTodo([
              ...todo,
              {
                id: Date.now(),
                item: newtodo,
                isDone: false,
              },
            ]);
            setNewtodo('');
          }
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
