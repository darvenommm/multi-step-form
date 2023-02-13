import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { stepReducer } from './features/step';
import { userDataReducer } from './features/userData';
import { timeOfTarifReducer } from './features/timeOfTarif';
import { planReducer } from './features/plan/logic/redux';
import { extrasReducer } from './features/extra';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  step: stepReducer,
  userData: userDataReducer,
  timeOfTarif: timeOfTarifReducer,
  plan: planReducer,
  extras: extrasReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
