import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state, action) => {
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    }
  },
});

export const actions = counterSlice.actions;

export default counterSlice.reducer;