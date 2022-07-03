import React, { Fragment } from 'react'
import { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const changeHandller = (v) =>{
    setCount(count+v);
  }
  return (
    <Fragment>
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={()=>changeHandller(1)}>Add 1</button>
        <button onClick={()=>changeHandller(-1)}>Dec 1</button>
      </div>
    </Fragment>
  )
}
