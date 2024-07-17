import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const baseUrl = 'http://localhost:3000/api'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        axios.get(`${baseUrl}/todos`)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the todos!', error);
            });
    }, []);

    const addTodo = () => {
        if (newTodo.trim()) {
            axios.post(`${baseUrl}/todos`, { title: newTodo, completed: false })
                .then((response) => {
                    setTodos([...todos, response.data]);
                    setNewTodo('');
                })
                .catch((error) => {
                    console.error('There was an error creating the todo!', error);
                });
        }
    };

    const updateTodo = (id, updates) => {
        axios.put(`${baseUrl}/todos/${id}`, updates)
            .then((response) => {
                setTodos(todos.map(todo => todo.id === id ? response.data : todo));
            })
            .catch((error) => {
                console.error('There was an error updating the todo!', error);
            });
    };

    const deleteTodo = (id) => {
        axios.delete(`${baseUrl}/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch((error) => {
                console.error('There was an error deleting the todo!', error);
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '60vh', width: '100vw' }}>
            <div style={{ padding: '20px', width: '25%', borderRight: '5px solid white' }}>
                <h2>Create a Todo</h2>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className='input'
                />
                <br />
                <br />
                <button onClick={addTodo}>Add</button>
            </div>
            <div style={{ padding: '20px', flex: 1 }}>
                <h2>Todo List</h2>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexBasis: '50%' }}>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onUpdate={updateTodo} onDelete={deleteTodo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
