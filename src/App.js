import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./logo.svg";
import Navbar from "./navbar";
import Home from "./Home";
import GetAPi from "./GetAPi";
import Create from "./Crud/create";
// import Data from "./Crud/Data";
import Counter from "./Counter";
import EmpInfo from "./EmpInfo";
import Courses from "./Courses";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/getApi" element={<GetAPi />} />
          <Route path="/create" element={<Create />} />
          {/* <Route path="/data" element={<Data />} /> */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/empinfo" element={<EmpInfo />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
