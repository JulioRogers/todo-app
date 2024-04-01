import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

export function TodoForm() {
    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

  return (
    <form onSubmit={onSubmit}>
      <label>Ingresa el Todo</label>
      <textarea placeholder="Escribe aqui..." onChange={onChange}/>
      <div className="TodoForm-buttonContainer">
      <button className="TodoForm-button .TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
      <button className="TodoForm-button .TodoForm-button--add" type="submit">Guardar</button>
      </div>
    </form>
  );
}