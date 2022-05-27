import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./Coin.module.css";
import numFormatter from "../Functions/numFormater";

export default function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        const resData = await res.json();
        console.log(resData);
        setCoinData(resData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [coinId]);

  if (coinData) {
    return (
      <div>
        <div className={classes.header}>
          <h2>IE Final Project</h2>
          <h3>change theme</h3>
        </div>
        <div className={classes.body}>
          <img src={coinData.image.large} alt="logo" height="235" width="235" />
          <h1 style={{ margin: 0, color: "#fff", fontSize: "70px" }}>
            {coinData.name}
          </h1>
          <p style={{ fontSize: "30px", color: "#fff" }}>
            {coinData.description.en.slice(0, 188)}
          </p>
          <h1 style={{ margin: 0, color: "#fff" }}>
            Rank: {coinData.coingecko_rank}
          </h1>
          <h1 style={{ margin: 0, color: "#fff" }}>
            Current Price: ${coinData.market_data.current_price.usd}
          </h1>
          <h1 style={{ margin: 0, color: "#fff" }}>
            Market Cap: ${numFormatter(coinData.market_data.market_cap.usd)}
          </h1>
        </div>
      </div>
    );
  }
}
