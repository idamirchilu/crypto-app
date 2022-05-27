import classes from "./CoinContainer.module.css";
import { useNavigate } from "react-router-dom";
import numFormater from "../Functions/numFormater";

export default function CoinContainer({ data }) {
  const navigate = useNavigate();
  // نویگیت شدن به پیج تک کوین
  function navigateToCoinHandler() {
    navigate(`/search/${data.id}`);
  }

  // عوض شدن رنگ تغییرات قیمت
  const changeColor = data.price_change_percentage_24h > 0 ? "green" : "red";

  return (
    <div className={classes.container}>
      <div onClick={navigateToCoinHandler} className={classes.coin}>
        <img alt="logo" height="50" width="50" src={data.image} />
        <div>
          <h2 style={{ margin: 0, color: "#fff" }}>
            {data.symbol.toUpperCase()}
          </h2>
          <h4 style={{ margin: 0, color: "#fff" }}>{data.name}</h4>
        </div>
      </div>
      <div
        style={{ color: "#fff", marginRight: "5rem" }}
      >{`$${data.current_price}`}</div>
      <div style={{ color: changeColor, marginRight: "6rem" }}>
        {data.price_change_percentage_24h}
      </div>
      <div style={{ color: "#fff" }}>${numFormater(data.market_cap)}</div>
    </div>
  );
}
