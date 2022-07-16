import React, { useState } from 'react';
import uniqid from 'uniqid';


const Todoinput = ({ todo, storeData }) => {
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
            storeData({
              id: uniqid(),
              item: newtodo,
              isDone: false,
            });
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
