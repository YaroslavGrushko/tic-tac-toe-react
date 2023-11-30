import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface appState {
  mainMessage: string;
}

const initialState: appState = {
  mainMessage: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMainMessage(state, action: PayloadAction<string>) {
      state.mainMessage = action.payload;
    },
  },
});

export const { setMainMessage } = appSlice.actions;
export default appSlice.reducer;
