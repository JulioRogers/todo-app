import './ToDoItem.css';

export function ToDoItem({ text, completed }) {
  return (
    <li className='TodoItem'>
      <span className={`Icon Icon-check ${completed&&"Icon-check--active"}`}>V</span>
      <p className={`TodoItem-p ${completed&&"ToDoItem-p--complete"}`}>{text}</p>
      <span className='Icon Icon-delete'>X</span>
    </li>
  );
}
