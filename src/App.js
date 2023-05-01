import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LayoutFront from "./components/FrontOffice/Layout";
import Home from "./components/FrontOffice/Home";
import LayoutBack from "./components/BackOffice/Layout";
import Dashboard from "./components/BackOffice/Dashboard";
import ManageClasses from "./components/BackOffice/ManageClasses";
import AddEditClass from "./components/BackOffice/AddEditClass";
import Aulas from "./components/FrontOffice/Aulas";
import Login from "./components/FrontOffice/Login";
import { useEffect } from "react";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    console.table("LOG: " + isLogged);
  }, [isLogged]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LayoutFront isLogged={[isLogged, setIsLogged]} />}
        >
          <Route index element={<Home />} />
          <Route
            path="classes"
            element={<Aulas isLogged={[isLogged, setIsLogged]} />}
          />
        </Route>
        <Route
          path="/login"
          element={<Login isLogged={[isLogged, setIsLogged]} />}
        />
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
