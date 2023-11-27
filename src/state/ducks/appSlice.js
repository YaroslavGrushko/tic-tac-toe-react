import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    mainMessage: "",
  },
  reducers: {
    setMainMessage(state, action) {
      state.mainMessage = action.payload;
    },
  },
});

export const { setMainMessage } = appSlice.actions;
export default appSlice.reducer;
