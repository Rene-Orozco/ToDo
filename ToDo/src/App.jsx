import { useState } from 'react'
import './App.css'
import ToDoCounter from './components/ToDoCounter/ToDoCounter'
import ToDoAdd from './components/ToDoAdd/ToDoAdd';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  // estado array list
  const [ arrayList, setArrayList ] = useState([]);

  // estado ToDoCounter
  const [ counter, setCounter ] = useState(0);

  return (
    <>
    <h1>ToDo</h1>

    <ToDoAdd 
    setCounter = {setCounter}
    setArrayList =  {setArrayList}
    />

    <hr />
    <ToDoCounter counter = {counter} />
    <ToDoList arrayList = {arrayList} />
    </>
  )
}

export default App
