import React from 'react';
import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
    const [value, setValue] = useState('');

  const [childValue2, setChildValue2] = useState('');

  const setChildValue = (e) => {
     setChildValue2(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <h3>Parent for child1: {value}</h3>
      <Child1 value={value} childValue2={childValue2}/>

     
      <h3>Parent for child2: {childValue2}</h3>
      {/* <Child2 childValue2={childValue2} setChildValue2={setChildValue2} /> */}
      <Child2 childValue2={childValue2} setChildValue={setChildValue} />
    </div>
  );
};

export default Parent;

//on chabge of any state in parent conmponent,
//the child component also render if child have dependency of that state
