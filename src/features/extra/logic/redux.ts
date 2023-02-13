import { createSlice } from '@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';
import { ExtraTitle } from '../types';
import { StateType } from '../../../store';

type InitialState = Array<ExtraTitle>;

const extrasSlice = createSlice({
  name: '@@extra',
  initialState: [] as InitialState,
  reducers: {
    toggleExtra: (state, action: PayloadAction<ExtraTitle>) => {
      const newTitle = action.payload;

      return state.includes(newTitle)
        ? state.filter((title) => title !== newTitle)
        : state.concat(newTitle);
    },
  },
});

export const extrasReducer = extrasSlice.reducer;

export const { toggleExtra } = extrasSlice.actions;

// selectors
export const selectExtras = (state: StateType) => state.extras;
