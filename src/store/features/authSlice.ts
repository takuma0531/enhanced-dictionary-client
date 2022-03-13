import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authService } from "@/services/http";
import { User } from "@/typings/models/user";
import { AsyncThunkTypeUser } from "@/enums/asyncThunkType";
import { JwtService } from "@/services/localStorage/JwtService";

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
    logoutUser: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
      JwtService.removeToken();
    },
  },
});

export const { updateEmail, updatePassword, toggleIsAuth, logoutUser } =
  authSlice.actions;

const thunkFunctions = {
  registerUser: createAsyncThunk(
    AsyncThunkTypeUser.REGISTER_USER,
    async (credential: User, { dispatch }) => {
      const user = await authService.registerUser(credential);
      if (user.authResult?.isAuthorized) dispatch(toggleIsAuth());
    }
  ),
  loginUser: createAsyncThunk(
    AsyncThunkTypeUser.LOGIN_USER,
    async (credential: User, { dispatch }) => {
      const authorizedResult = await authService.loginUser(credential);
      if (authorizedResult.isAuthorized) dispatch(toggleIsAuth());
    }
  ),
  getUser: createAsyncThunk(
    AsyncThunkTypeUser.GET_USER,
    async (arg: void, { dispatch }) => {
      const user = await authService.getUser();
      if (user) dispatch(updateEmail(user.email!));
    }
  ),
  checkAuth: createAsyncThunk(
    AsyncThunkTypeUser.CHECK_AUTH,
    async (arg: void, { dispatch }) => {
      const authorizedResult = await authService.checkAuth();
      if (authorizedResult.isAuthorized) dispatch(toggleIsAuth());
    }
  ),
};

export const { registerUser, loginUser, getUser, checkAuth } = thunkFunctions;

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
