import classes from "./CoinList.module.css";
import { useEffect } from "react";
import CoinContainer from "./CoinContainer";
import { coinActions } from "../store/coin-slice";
import { useSelector, useDispatch } from "react-redux";

export default function CoinList() {
  const dispatch = useDispatch();
  const coinState = useSelector((state) => state.coin);

  // گرفتن دیتا کوین ها از ای پی ای و ذخیره در کوین دیتا
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const resData = await res.json();
        dispatch(coinActions.setCoinData(resData));
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h4>Coin</h4>
        <h4>price</h4>
        <h4>24h changes</h4>
        <h4>Market Cap</h4>
      </div>

      {coinState.coinData.map((item) => (
        <CoinContainer key={item.symbol} data={item} />
      ))}
    </div>
  );
}
