import { createSlice } from '@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';
import { InitialState, UserDataProperty, UserDataFieldNames } from '../types';
import { StateType } from '../../../store';

const initialState: InitialState = {
  data: { name: '', email: '', phone: '' },
  correct: false,
};

const userDataSlice = createSlice({
  name: '@@userData',
  initialState,
  reducers: {
    setUserDataField: (state, action: PayloadAction<UserDataProperty>) => {
      state.data[action.payload.fieldName] = action.payload.value;
    },
    setCorrect: (state, action: PayloadAction<boolean>) => {
      state.correct = action.payload;
    },
  },
});

export const userDataReducer = userDataSlice.reducer;

export const { setCorrect, setUserDataField } = userDataSlice.actions;

// selectors
export const selectUserDataPropertyValue = (
  state: StateType,
  fieldName: UserDataFieldNames,
) => state.userData.data[fieldName];

export const selectUserData = (state: StateType) => state.userData.data;

export const selectUserDataCorrect = (state: StateType) =>
  state.userData.correct;
