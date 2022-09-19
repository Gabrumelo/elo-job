import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EloBoost from "./pages/EloBoost";
import Home from "./pages/Home";
import SuportHome from "./pages/SuportHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SuportHome />}>
          <Route path="elo-boost" element={<EloBoost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
