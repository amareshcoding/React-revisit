import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Card from './components/card/Card';
import Counter from './components/counter/Counter';
import Parent from './components/Propssending/Parent';
import Todo from './components/todo/Todo';

function App() {

  const carddata = [{
    src :'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
    head: 'Lorem ipsum dolor sit amet amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit. Provident esse, eveniet quam quis unde '
  }];
 
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <h1>Hello From React App</h1>
      {/* <div>
        <Button text="Submit" path="https://reactjs.org/" /> <br/> 

        <Button text="Sign In" path="https://reactjs.org/" /> <br/> 

        <Button text="Sign Up" path="https://reactjs.org/" />
      </div> */}

      {/* <div>
        {
          carddata.map(e =>{
            return <Card src={e.src} head={e.head} desc={e.desc}/>
          })
        }
      </div> */}

      {/* <Counter/>
      <hr/>
      <Todo/>
      <hr/>
      <div>
        <button onClick={()=>setToggle(!toggle)}>{toggle? 'Show Todo' : 'Show Counter'}</button>
        {toggle ? <Counter/> : <Todo/>}
      </div> */}

      <Parent/>
    </div>
  );
}

export default App;
