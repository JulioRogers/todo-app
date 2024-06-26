import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} To Dos</h2>
  }


export {TodoCounter};