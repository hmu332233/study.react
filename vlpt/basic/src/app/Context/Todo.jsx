import React, { useContext } from 'react';

import { TodoProvider } from './TodoContext';

import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

function Todo() {
  return (
      <TodoProvider>
        <TodoCreate />
        <TodoList />
      </TodoProvider>
  );
};

export default Todo;