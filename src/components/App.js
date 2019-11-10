import React, { useState} from 'react';

import './App.css';
import Todo from  './Todo'
import TodoPush from './TodoPush'


const App = () => {
  const [arrTodo, setArrTodo] = useState([])
  
   const saveTodo = value => {
   setArrTodo([...arrTodo, value])
  }

  const deleteIndex = deleteIndex => {
      setArrTodo(arrTodo.filter((todo, index) => index != deleteIndex))
  }

  return (
    <div className="todosBlock">
      <h1>Задачи</h1>
      <TodoPush saveTodo={saveTodo} />
      {
        arrTodo.map((task, index) => (
          <Todo key={index} text={task} index={index} deleteIndex={deleteIndex} />
        ))
      }
    </div>
    
  )
}

export default App;
