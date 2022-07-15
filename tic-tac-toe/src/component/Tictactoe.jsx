import React, { useState } from 'react';
import './Tictactoe.css'
import Box from './Box';


const initialState = ['', '', '', '', '', '', '', '', ''];
const Tictactoe = () => {
  const [state, setState] = useState(initialState);
  const [isXDone, setIsXDone] = useState(false);

  const handdleChange =(i)=> {
     state[i] = 'X'
     setState(state);
     
  }
  console.log(state);
  return (
    <div className='tic_tac_toe' >
      <h1>Tic Tac Toe</h1>
      <div className='tic_tac_toe_container'>
        <div className="tic_tac_toe_rows">
          <Box state={state[0]} bg='bg-b bg-r' onClick={handdleChange} ind='0'/>
          <Box state={state[1]} bg='bg-b' onClick={handdleChange} ind='1'/>
          <Box state={state[2]} bg='bg-b bg-l' onClick={handdleChange} ind='2'/>
        </div>
        <div className="tic_tac_toe_rows">
          <Box state={state[3]} bg='bg-b bg-r' onClick={handdleChange} ind='3'/>
          <Box state={state[4]} bg='bg-b ' onClick={handdleChange} ind='4'/>
          <Box state={state[5]} bg='bg-b bg-l' onClick={handdleChange} ind='5'/>
        </div>
        <div className="tic_tac_toe_rows">
          <Box state={state[6]} bg='bg-r' onClick={handdleChange} ind='6'/>
          <Box state={state[7]} bg='' onClick={handdleChange} ind='7'/>
          <Box state={state[8]} bg='bg-l' onClick={handdleChange} ind='8'/>
        </div>
      </div>
    </div>
  );
};

export default Tictactoe;
