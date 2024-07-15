import React, { useState } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [editing, setediting] = useState(false);
  const [cur, setCur] = useState({ title: '', completed: null })

  const handleEdit = () => {
    setCur(todo);
    setediting(true);
  }

  const handleCheckboxChange = () => {
    setCur(prev => ({ ...prev, completed: !todo.completed }));
  };

  const handleTitleChange = (e) => {
    setCur(prev => ({ ...prev, title: e.target.value }));
  };

  const handleSubmit = () => {
    const { id, ...rest } = cur;
    onUpdate(todo.id, { ...rest })
    setediting(false);
  }

  const { completed, title } = todo;
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <div style={{ display: 'inline-flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {!editing && <div style={{ color: completed ? 'green' : 'red', fontSize: '1em', fontWeight: 'bold' }}>{completed ? '✓' : 'X'}</div>}
        {!editing && <div>{title}</div>}
        {editing && <>

          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={handleCheckboxChange}
            className="checkbox"
          />
          <input
            type="text"
            defaultValue={todo.title}
            onChange={handleTitleChange}
            className="input"
          />
        </>}
      </div>
      <div style={{ display: 'inline-flex' }}>
        <button onClick={() => !editing ? handleEdit() : handleSubmit()} className="button">{editing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(todo.id)} className="button">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
