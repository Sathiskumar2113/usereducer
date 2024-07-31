import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import { CounterReduce, initialState } from './Components/CounterReduce';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  const [state,dispatch]=useReducer(CounterReduce,initialState)
  const handleclick=()=>
  {
    dispatch({type:'incement'})

  }
  const handlecdecrement=()=>
  {
    dispatch({type:'decrement'})
  }

  return (
    <div className="App">
     <h1>count: {state.count}</h1>
     <button onClick={handleclick}>increment</button>
     <button onClick={handlecdecrement}>decrement</button>
    </div>
  );
}

export default App;
