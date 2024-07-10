import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const handleCheckboxChange = () => {
    onUpdate(todo.id, { completed: !todo.completed });
  };

  const handleTitleChange = (e) => {
    onUpdate(todo.id, { title: e.target.value });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxChange}
        className="checkbox"
      />
      <input
        type="text"
        value={todo.title}
        onChange={handleTitleChange}
        className="input"
      />
      <button onClick={() => onDelete(todo.id)} className="button">Delete</button>
    </div>
  );
};

export default TodoItem;
