import { combineReducers , configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules';


const rootReducer = combineReducers({
  counter: counterReducer,
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;