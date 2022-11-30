import React, { useState, useEffect, useRef } from 'react'
import { StateType } from '../App'


interface Props {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    todos: Array<StateType>;
    setTodos: React.Dispatch<React.SetStateAction<StateType[]>>;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    editId: number | null;
    setEditId: React.Dispatch<React.SetStateAction<number | null>>

}


const InputContainer:React.FC<Props> = (props) => {
    const { inputValue, setInputValue, todos, setTodos, isEditing, setIsEditing, editId, setEditId } = props

    const inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        inputRef.current?.focus()
    }, [])


    /*-----------HandleChange-----------*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }


    /*-----------HandleSubmit-----------*/
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        inputRef.current?.focus()

        if (!inputValue) return

        if (!isEditing) {
            setTodos([
                { id: todos.length + 1, todo: inputValue, completed: false },
                ...todos
            ])
            setInputValue('')

        } else {
            const newTodoText = inputValue
            const newTodos = todos.map(todo => {
                if (todo.id === editId) {
                    return {
                        ...todo,
                        todo: newTodoText
                    }
                }
                return todo
            })
            setTodos(newTodos)
            setIsEditing(false)
            setEditId(null)
            setInputValue('')
        }
      
    }

    
  return (
    <div className='input-wrapper'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Todos...' value={inputValue} onChange={handleChange} ref={inputRef} />
            <button>{isEditing ? 'Edit Todo' : 'Add Todo'}</button>
        </form>
    </div>
  )
}

export default InputContainer