import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface dataState {
  arrays: any;
}

const initialState: dataState = {
  arrays: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    add_object: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.arrays = [];
    },
    delete_object: (state) => {
      state.arrays = [];
    },
    reset: (state, action: PayloadAction<object>) => {
      state.arrays = [];
    },
    change: (state, action: PayloadAction<object>) => {
      state.arrays = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { add_object,delete_object,reset,change } = dataSlice.actions

export default dataSlice.reducer