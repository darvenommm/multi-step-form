import { createSlice } from '@reduxjs/toolkit';

import { Time } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { StateType } from '../../../store';

const timeOfTarifSlice = createSlice({
  name: '@@timeOfTarif',
  initialState: 'monthly' as Time,
  reducers: {
    setTimeOfTarif: (_state, action: PayloadAction<Time>) => {
      return action.payload;
    },
  },
});

export const timeOfTarifReducer = timeOfTarifSlice.reducer;

export const { setTimeOfTarif } = timeOfTarifSlice.actions;

// selectors
export const selectTimeOfTarif = (state: StateType) => state.timeOfTarif;
