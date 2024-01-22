import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./logo.svg";
import Navbar from "./navbar";
import Home from "./Home";
import GetAPi from "./GetAPi";
import Create from "./Crud/create";
import Data from "./Crud/Data";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/getApi" element={<GetAPi />} />
          <Route path="/create" element={<Create />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
