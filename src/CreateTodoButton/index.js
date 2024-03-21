import './CreateTodoButton.css';

function CreateTodoButton({ onCreate }) {
  return (
    <button className="CreateTodoButton" onClick={onCreate}>Create</button>
  );
}

export { CreateTodoButton };