import { configureStore } from '@reduxjs/toolkit';
import myReducer from './language/LanguageNum';

const store = configureStore({
  reducer: {
    my: myReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
