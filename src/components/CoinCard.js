import classes from "./CoinCard.module.css";

export default function CoinCard({ data }) {
  // رفتن به پیج کوین وقتی روی کارد کلیک میشود
  function navigateToCoinHandler() {
    navigate(`/search/${data.id}`);
  }
  return (
    <div onClick={navigateToCoinHandler} className={classes.coin}>
      <img alt="logo" height="50" width="50" src={data.image} />
      <div>
        <h2 style={{ margin: 0, color: "#fff" }}>
          {data.symbol.toUpperCase()}
        </h2>
        <h4 style={{ margin: 0, color: "#fff" }}>{data.name}</h4>
      </div>
    </div>
  );
}
