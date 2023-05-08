import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import LayoutFront from "./components/FrontOffice/Layout";
import Home from "./components/FrontOffice/Home";
import Aulas from "./components/FrontOffice/Aulas";
import Login from "./components/FrontOffice/Login";
import LayoutBack from "./components/BackOffice/Layout";
import Dashboard from "./components/BackOffice/Dashboard";
import ManageClasses from "./components/BackOffice/ManageClasses";
import AddEditClass from "./components/BackOffice/AddEditClass";
import Booking from "./components/BackOffice/Booking";
import BookingAddEdit from "./components/BackOffice/BookingAddEdit";
import Modalities from "./components/BackOffice/Modalities";
import AddEditModality from "./components/BackOffice/AddEditModality";

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
          <Route path="booking" element={<Booking />} />
          <Route path="booking/:id" element={<BookingAddEdit />} />
          <Route path="modalities" element={<Modalities />} />
          <Route path="modalities/:id" element={<AddEditModality />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
