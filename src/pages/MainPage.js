import classes from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.topbox}>
        <button>Change Theme</button>
      </div>
      <div className={classes.leftbox}>
        <h1 style={{ color: "#fff" }}>Search &#38;</h1>
        <h1 style={{ color: "#eeac26" }}>
          <h1 style={{ display: "inline", color: "#fff" }}>Buy</h1> Crypto
        </h1>
        <h4>Shahid Beheshti University</h4>
        <h4>IE Final Project</h4>
        <button onClick={() => navigate("/search")}>SEARCH MORE</button>
      </div>
    </div>
  );
}
