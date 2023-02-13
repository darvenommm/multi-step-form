import { createSlice } from '@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';
import { Step } from '../types';
import { StateType } from '../../../store';

const stepSlice = createSlice({
  name: '@@step',
  initialState: 'userData' as Step,
  reducers: {
    setStep: (_state, action: PayloadAction<Step>) => {
      return action.payload;
    },
  },
});

export const stepReducer = stepSlice.reducer;

export const { setStep } = stepSlice.actions;

// selectors
export const selectStep = (state: StateType) => state.step;
