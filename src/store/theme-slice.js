import { createSlice } from "@reduxjs/toolkit";

const initState = {
  darkMode: true,
  backgroundPage1Url: "../assets/background.png",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    changeToLigth(state) {
      state.backgroundPage1Url = "../assets/background.jpg";
    },
    changeToDark(state) {
      state.backgroundPage1Url = "../assets/background.png";
    },
  },
});

export default themeSlice;

export const themeActions = themeSlice.actions;
