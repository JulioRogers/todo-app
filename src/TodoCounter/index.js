import './TodoCounter.css';

function TodoCounter({ total, completed}) {
    return <h2 className="TodoCounter">Has completado {completed} de {total} To Dos</h2>
  }


export {TodoCounter};