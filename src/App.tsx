import React, { useState } from 'react';
import './styles.scss';
import InputContainer from './components/InputContainer';
import TodosList from './components/TodosList';



export interface StateType {
  id: number;
  todo: string;
  completed: boolean;
}



const App = () => {
  const [todos, setTodos] = useState<StateType[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editId, setEditId] = useState<number | null>(null)


  /*------------RemoveTodo------------*/
  const removeTodo = (id: number): void => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }
  

  /*------------CompleteTodo------------*/
  const completeTodo = (id: number): void => {
    const filteredTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(filteredTodos)
  }


  /*------------EditTodo------------*/
  const editTodo = (id: number, todoText: string): void => {
    setInputValue(todoText)
    setIsEditing(true)
    setEditId(id)
  } 


  return (
      <div id="App">
        <InputContainer
          inputValue={inputValue}
          setInputValue={setInputValue} 
          todos={todos} 
          setTodos={setTodos} 
          isEditing={isEditing} 
          setIsEditing={setIsEditing}
          editId={editId}
          setEditId={setEditId}
        />

        <TodosList 
          todos={todos} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      </div>
  );
}

export default App;
