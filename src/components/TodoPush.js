import React, {useState} from 'react'
import './todoPush.css'


const TodoPush = ( {saveTodo} ) => {
    const [value, setInputValue] = useState('')

    const handlerInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const clearInputField = () => {
        setInputValue('')
    }

    const pushNewTask = (e) => {
        e.preventDefault()
        if(!value) return
        saveTodo(value)
        clearInputField()
    }

    return (
        <form className="todoPush">
            <input type="text" value={value}  onChange={handlerInputValue} />
            <button onClick={pushNewTask} >Добавить задачу</button>
        </form>
    )
}

export default TodoPush