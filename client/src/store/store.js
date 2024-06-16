import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
