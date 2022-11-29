import React from 'react'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { StateType } from '../App'


interface Props {
    todos: StateType[];
    removeTodo: (id: number) => void;
    completeTodo: (id: number) => void;
    editTodo: (id: number, todoText: string) => void;
}


const TodosList: React.FC<Props> = ({ todos, removeTodo, completeTodo, editTodo }) => {

  return (
    <ul className="todos-wrapper">
        {
            todos?.map(todo => {
                return (
                    <li key={todo.id} className="todo-item">
                        <input type='checkbox' onChange={() => completeTodo(todo.id)} />
                        <h4 style={{textDecoration: `${todo.completed ? 'line-through' : ''}`}}>{todo.todo}</h4>
                        <button onClick={() => removeTodo(todo.id)}><FaTrashAlt /></button>
                        <button onClick={() => editTodo(todo.id, todo.todo)}><FaEdit /></button>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default TodosList