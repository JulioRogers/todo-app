import './ToDoItem.css';

export function ToDoItem({ text, completed, OnComplete, OnDelete}) {
  return (
    <li className='TodoItem'>
      <span 
      className={`Icon Icon-check ${completed&&"Icon-check--active"}`}
      onClick={OnComplete}
      >V</span>

      <p className={`TodoItem-p ${completed&&"ToDoItem-p--complete"}`}>{text}</p>

      <span className='Icon Icon-delete' onClick={OnDelete} >X</span>

    </li>
  );
}
