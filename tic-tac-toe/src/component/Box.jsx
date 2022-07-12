import React from 'react'

const Box = ({state, bg, onClick, ind}) => {
  return (
    <div className={`box_component ${bg}`} onClick={()=>onClick(ind)}>
      {state}
    </div>
  )
}

export default Box
