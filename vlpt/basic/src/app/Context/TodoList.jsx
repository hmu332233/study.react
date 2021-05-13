import React, { useContext } from "react";

import {
  useTodoState,
  useTodoDispatch,
} from "./TodoContext";

function TodoList() {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
