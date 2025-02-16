import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  token: null | string;
};

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (data, { payload }: PayloadAction<string>) => {
      data.token = payload;
    },
    logOut: state => {
      state = initialState;
    },
  },
});

export const { setToken, logOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
