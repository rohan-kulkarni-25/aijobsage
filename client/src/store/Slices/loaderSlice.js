import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    updateLoader: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
