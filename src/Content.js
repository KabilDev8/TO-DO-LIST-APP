import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa6";


function Content() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input
      className='todo-input'
        type="text"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='add-btn' onClick={handleAddTodo}>Add</button>
      <ul >
        {todos.map((todo, index) => (
          <li key={index} className='todo-item'>
            {todo}
            <button className='delete-btn' onClick={() => handleDeleteTodo(index)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;

