import React from 'react';
import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { ToDoItem } from './ToDoItem';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Llorar con la lloroa', completed: true},];


  function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify([]));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
  
    }

    const [item,setItem]=React.useState(parsedItem);

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);};

    return [
      item,
      saveItem,
    ];
  
  }

function App() {
 

  //STATES
  const [todos, saveTodos] =useLocalStorage('todos', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  //SEARCH
  const SearchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  //FUNCTIONS FOR BUTTONS
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }



  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <TodoList>
        {SearchedTodos.map(todo => (
        <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} OnComplete={()=>completeTodo(todo.text)} OnDelete={()=>deleteTodo(todo.text)}/>))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


export default App;

