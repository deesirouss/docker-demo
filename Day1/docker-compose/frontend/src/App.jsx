import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (<>
    <div className="header">
      <h2>Todo App</h2>
    </div>
    <div className="App">
      <main>
        <TodoList />
      </main>
    </div>
  </>
  );
};

export default App;
