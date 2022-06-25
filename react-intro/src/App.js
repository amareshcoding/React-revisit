import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div>
      <h1>Hello From React App</h1>
      <div>
        <Button text="Submit" path="https://reactjs.org/" /> <br/> <br/>

        <Button text="Sign In" path="https://reactjs.org/" /> <br/> <br/>

        <Button text="Sign Up" path="https://reactjs.org/" />
      </div>
    </div>
  );
}

export default App;
