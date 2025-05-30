import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TokenState {
   token: string;
}

const initialState: TokenState = JSON.parse(localStorage.getItem("auth-token") || "{}") || {
   token: "",
};

export const tokenSlice = createSlice({
   name: "token",
   initialState,
   reducers: {
      setToken: (state, action: PayloadAction<TokenState>) => {
         console.log(state);
         state.token = action.payload.token;
         localStorage.setItem("auth-token", JSON.stringify(state));
      },

      clearToken: (state) => {
         state.token = "";
         localStorage.removeItem("auth-token");
      },
   },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
