import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter';

function App() {
  const carddata = [{
    src :'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
    head: 'Lorem ipsum dolor sit amet amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit. Provident esse, eveniet quam quis unde '
  }];
 
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

      <Counter/>

    </div>
  );
}

export default App;
