import classes from "./SearchPage.module.css";
import CoinList from "../components/CoinList";
import { useState, useEffect } from "react";
import { coinActions } from "../store/coin-slice";
import { useDispatch } from "react-redux";

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  // صدا زدن تابع سرچ از ریداکس
  useEffect(() => {
    dispatch(coinActions.searchCoin(searchInput));
    console.log(searchInput.length);
  }, [dispatch, searchInput]);

  return (
    <div>
      <div className={classes.header}>
        <h2>IE Final Project</h2>
        <h3>change theme</h3>
      </div>
      <div className={classes.main}>
        <h1>Search Coin</h1>
        <p>Get Information From Here</p>
      </div>
      <div className={classes.search}>
        <h1>Cryptocurrency Prices By Market Cap</h1>
        <div>
          <input
            type="text"
            placeholder="Search For a Crypto Currency"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <CoinList />
      </div>
    </div>
  );
}
