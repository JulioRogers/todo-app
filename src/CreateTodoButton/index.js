import './CreateTodoButton.css';
import React from 'react';
import {TodoContext} from '../TodoContext';

function CreateTodoButton({ setOpenModal }) {
  const {openModal} = React.useContext(TodoContext);
  return (
    <button className="CreateTodoButton" onClick={()=>{setOpenModal(!openModal)}}>+</button>
  );
}

export { CreateTodoButton };