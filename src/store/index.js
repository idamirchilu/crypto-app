import { configureStore } from "@reduxjs/toolkit";

import coinSlice from "./coin-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
  reducer: { coin: coinSlice.reducer, theme: themeSlice.reducer },
});

export default store;
