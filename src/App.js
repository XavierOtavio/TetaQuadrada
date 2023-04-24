import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutFront from "./components/FrontOffice/Layout";
import Home from "./components/FrontOffice/Home";
import LayoutBack from "./components/BackOffice/Layout";
import Dashboard from "./components/BackOffice/Dashboard";
import ManageClasses from "./components/BackOffice/ManageClasses";
import AddEditClass from "./components/BackOffice/AddEditClass"
import Aulas from "./components/FrontOffice/Aulas";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutFront />}>
          <Route index element={<Home />} />
          <Route path="classes" element={<Aulas />} />
        </Route>
        <Route path="/dashboard" element={<LayoutBack />}>
          <Route index element={<Dashboard />} />
          <Route path="classes" element={<ManageClasses />} />
          <Route path="classes/:id" element={<AddEditClass />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
