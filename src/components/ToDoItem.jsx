import React from 'react';

function ToDoItem({ todo, deleteTask, toggleComplete, editTask }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => editTask(todo.id)}>Edit</button>
      <button onClick={() => deleteTask(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
