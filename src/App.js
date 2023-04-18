import React from "react";
import Home from "./components/Front/Home";
import { Route, Routes } from "react-router";
import Layout from "./components/Front/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
