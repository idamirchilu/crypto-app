import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Coin from "./pages/Coin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/:coinId" element={<Coin />} />
    </Routes>
  );
}

export default App;
