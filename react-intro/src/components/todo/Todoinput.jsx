import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Button } from '@chakra-ui/react';

const Todoinput = ({ todo, storeData }) => {
  const [newtodo, setNewtodo] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewtodo(e.target.value)}
        value={newtodo}
      />

      <Button
        colorScheme="twitter"
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
      </Button>
    </div>
  );
};

export default Todoinput;
