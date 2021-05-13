import Reacct, { useContext, useReducer, createContext, useRef  } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoNextIdContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(1);
  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={todo}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export const useTodoState = () => {
  return useContext(TodoStateContext);
}

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
}

export const useTodoNextId = () => {
  return useContext(TodoNextIdContext);
};