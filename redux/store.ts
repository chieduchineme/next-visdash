import { configureStore, createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: { title: "Overview" },
  reducers: {
    setNavbarTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setNavbarTitle } = navbarSlice.actions;

export const store = configureStore({
  reducer: { navbar: navbarSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
