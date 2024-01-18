import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./navbar";
import Home from "./Home";
import GetAPi from "./GetAPi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/getApi" element={<GetAPi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
