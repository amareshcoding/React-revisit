import React, { useState } from 'react';

const Todoinput = ({ todo, setTodo }) => {
  const [newtodo, setNewtodo] = useState('');
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
    </div>
  );
};

export default Todoinput;
