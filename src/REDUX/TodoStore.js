import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../REDUX/Slices/TodoSlice';
import completedSlice from './Slices/completedSlice';
const store = configureStore({
 reducer: {
 todos: TodoReducer,
        completedReducer:completedSlice,
 },
});

export default store;