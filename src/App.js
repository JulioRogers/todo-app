import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      
      <TodoList>
        <ToDoItem/> 
        <ToDoItem/> 
        <ToDoItem/> 
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


function ToDoItem() {
  return(
      <li>
        <span>V</span>
        <p> Texto del To do aja</p>
        <span>X</span>
      </li>

  )
}
export default App;
