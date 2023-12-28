import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenWidth: window.innerWidth,
  headerHeight: 0,
  theme: "light",
};

const screenSlice = createSlice({
  name: "screen",
  initialState: initialState,
  reducers: {
    set: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    reset: (state, action) => ({
      ...initialState,
    }),
  },
});

export const { set } = screenSlice.actions;

export default screenSlice.reducer;
