import React, { useState } from 'react';
import './ToDo.css';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">To-Do List</h1>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        className="todo-input"
      />
      <button onClick={addTodo} className="todo-button">Add</button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
