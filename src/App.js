import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

const App = () => {
  return (
    <div className="App container p-4">
      <Router>
        <TodoContextProvider>
          <TodoInput />
          <TodoList />
        </TodoContextProvider>
      </Router>
    </div>
  );
}

export default App;
