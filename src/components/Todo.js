import React, {useState} from 'react'
import './todo.css'


const Todo = ({text, index, deleteIndex}) => {

  const [checked, setChecked] = useState(null)  


  const callDeleteFunction = () => {
    deleteIndex(index)
  }

  const ChangeCheck = e => {
      setChecked(e.target.checked)
  }
    
    return (
        <div className="todo">
            <label>
            <input type="checkbox"  onClick={ChangeCheck}/>
            <span className={checked ? "done" : "" }>{text}</span>
            <button onClick={callDeleteFunction}>DELETE</button>
            </label>

        </div>
    )
}

export default Todo