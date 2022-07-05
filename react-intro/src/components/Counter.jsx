import React, { Fragment } from 'react';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const changeHandller = (type) => {
    if (type === 'add') {
      setCount((prevCount) => prevCount + 1);
    } else if (type === 'sub') {
      setCount((prevCount) => {
        if (prevCount === 0) return 0;
        return prevCount - 1;
      });
    }
  };
  
  return (
    <Fragment>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => changeHandller('add')}>Add 1</button>
        <button onClick={() => changeHandller('sub')}>Dec 1</button>
      </div>
    </Fragment>
  );
}
