import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/userSlice";
import LoaderReducer from "./Slices/loaderSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    loader: LoaderReducer,
  },
});
