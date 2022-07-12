import React from 'react';

const Child2 = ({ childValue2, setChildValue2, setChildValue }) => {

  return (
    <div>
      {/* <input type="text" onChange={(e) => setChildValue2(e.target.value)} /> */}
      <input type="text" onChange={(e)=>setChildValue(e)} />
      <h3>child2: {childValue2}</h3>
    </div>
  );
};

export default Child2;
