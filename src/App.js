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
  {text: 'Llorar con la lloroa', completed: false},];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      
      <TodoList>
        {defaultTodos.map(todo => (
        <ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}


export default App;
