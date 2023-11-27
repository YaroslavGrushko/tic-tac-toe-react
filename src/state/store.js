import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./ducks/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
