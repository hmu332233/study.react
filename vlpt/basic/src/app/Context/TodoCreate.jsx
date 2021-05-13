import React, { useContext } from 'react';

import { TodoDispatchContext, TodoStateContext, TodoProvider } from './TodoContext';

function TodoCreate() {
  const dispatch = useContext(TodoDispatchContext);

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const { todo } = Object.fromEntries(formData);
    
    dispatch({ type: 'CREATE', payload: { id: Math.random(), text: todo } });

    e.preventDefault();
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">추가</button>
      </form>

  );
};

export default TodoCreate;