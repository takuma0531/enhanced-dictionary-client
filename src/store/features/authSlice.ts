import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
  email: string;
  password: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: "",
  password: "",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    toggleIsAuth: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const { updateEmail, updatePassword, toggleIsAuth } = authSlice.actions;

// TODO: communication with api

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;