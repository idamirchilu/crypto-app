import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    coinData: [],
    searchCoinData: [],
    onSearch: false,
    last3search: [],
  },
  reducers: {
    // ست کردن دیتا در ریداکس
    setCoinData(state, { payload }) {
      state.onSearch = false;
      state.coinData = payload;
    },
    // سرچ کوین با گرفتن ورودی سرچ بین کوین دیتا سرچ میکند
    searchCoin(state, { payload }) {
      if (payload.length === 0) {
        state.onSearch = false;
        return;
      }
      state.onSearch = true;
      state.searchCoinData = state.coinData.filter((item) => {
        // دخیره کردن سرچ در لوکال استوریج
        if (item.symbol.includes(payload) && payload.length === 3) {
          localStorage.setItem(item.name, item.name);
          state.last3search.push(item.name);
        }
        return item.symbol.includes(payload);
      });
    },
  },
});

export default coinSlice;

export const coinActions = coinSlice.actions;
