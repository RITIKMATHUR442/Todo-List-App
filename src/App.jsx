// App.jsx
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);

  const addTask = () => {
    if (task) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTask = (id) => {
    const taskToEdit = todos.find(todo => todo.id === id);
    setTask(taskToEdit.text);
    setEditing(id);
  };

  const saveTask = () => {
    setTodos(todos.map(todo =>
      todo.id === editing ? { ...todo, text: task } : todo
    ));
    setEditing(null);
    setTask("");
  };

  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task"
        />
        {editing ? (
          <button onClick={saveTask}>Save Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </header>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.text}
            <button onClick={() => editTask(todo.id)} className="edit">Edit</button>
            <button onClick={() => deleteTask(todo.id)} className="delete">Delete</button>
          </li>
        ))}
      </ul>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
