import { createSlice } from '@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';
import { Plan } from '../types';
import { StateType } from '../../../store';

const planSlice = createSlice({
  name: '@@plan',
  initialState: 'arcade' as Plan,
  reducers: {
    setPlan: (_state, action: PayloadAction<Plan>) => {
      return action.payload;
    },
  },
});

export const planReducer = planSlice.reducer;

export const { setPlan } = planSlice.actions;

export const selectPlan = (state: StateType) => state.plan;
