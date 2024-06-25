import { configureStore } from '@reduxjs/toolkit';

import HeaderReducer from './header/header.slice';
import ToastsReducer from './toasts/toasts.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: HeaderReducer,
      toasts: ToastsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
