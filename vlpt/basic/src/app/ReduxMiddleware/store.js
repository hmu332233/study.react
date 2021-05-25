import { combineReducers , configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules';
import logger from './middlewares/logger';


const rootReducer = combineReducers({
  counter: counterReducer,
})

const store = configureStore({
  middleware: [logger],
  reducer: rootReducer,
});

export default store;