import './App.css';
import Home from "./Container/Home/Home";
import NFT from "./Container/NFT/NFT";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route  path={'/'} element={<Home />} />
          <Route  path={'/NFT'} element={<NFT />} />
        </Routes>
      </Router>
  );
}

export default App;
