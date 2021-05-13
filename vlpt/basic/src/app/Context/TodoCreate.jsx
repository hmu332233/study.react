import React, { useContext } from 'react';

import { useTodoDispatch, useTodoNextId } from './TodoContext';

function TodoCreate() {
  const nextId = useTodoNextId();
  const dispatch = useTodoDispatch();

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const { todo } = Object.fromEntries(formData);
    
    dispatch({ type: 'CREATE', payload: { id: nextId.current, text: todo } });

    nextId.current += 1;
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