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
import Clients from "./components/BackOffice/Clients";
import ClientAddEdit from "./components/BackOffice/ClientAddEdit";
import Modalities from "./components/BackOffice/Modalities";
import AddEditModality from "./components/BackOffice/AddEditModality";
import Coaches from "./components/BackOffice/Coaches";
import CoachesFront from "./components/FrontOffice/CoachesFront";
import MyAccount from "./components/FrontOffice/MyAccount";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [choosedPlan, setChoosedPlan] = useState("");

  useEffect(() => {
    console.table("LOGIN: " + isLogged);
  }, [isLogged]);

  useEffect(() => {
    console.table("PLAN: " + choosedPlan);
  }, [choosedPlan]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LayoutFront isLogged={[isLogged, setIsLogged]} />}
        >
          <Route
            index
            element={
              <Home
                isLogged={[isLogged, setIsLogged]}
                choosedPlan={[choosedPlan, setChoosedPlan]}
              />
            }
          />
          <Route
            path="classes"
            element={
              <Aulas
                isLogged={[isLogged, setIsLogged]}
                choosedPlan={[choosedPlan, setChoosedPlan]}
              />
            }
          />
          <Route
            path="coachesfront"
            element={<CoachesFront isLogged={[isLogged, setIsLogged]} />}
          />
          <Route path="myaccount" element={<MyAccount />} />
        </Route>
        <Route
          path="/login"
          element={<Login isLogged={[isLogged, setIsLogged]} />}
        />
        <Route path="/dashboard" element={<LayoutBack />}>
          <Route index element={<Dashboard />} />
          <Route path="classes" element={<ManageClasses />} />
          <Route path="classes/:id" element={<AddEditClass />} />
          <Route path="client" element={<Clients />} />
          <Route path="client/:id" element={<ClientAddEdit />} />
          <Route path="modalities" element={<Modalities />} />
          <Route path="modalities/:id" element={<AddEditModality />} />
          <Route path="coaches" element={<Coaches />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
