import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "coin",
  initialState: { coinData: [] },
  reducers: {
    setCoinData(state, { payload }) {
      state.coinData = payload;
    },
    searchCoin(state, { payload }) {
      const coinCopyArray = [...state.coinData];
      if (payload.length === 0) {
        state.coinData = [...coinCopyArray];
      } else {
        state.coinData = state.coinData.filter((item) =>
          item.symbol.includes(payload)
        );
      }
    },
  },
});

export default coinSlice;

export const coinActions = coinSlice.actions;
