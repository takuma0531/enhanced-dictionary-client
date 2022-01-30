import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import wordReducer from "./features/wordSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    word: wordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
