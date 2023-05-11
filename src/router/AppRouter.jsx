import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Afi from "../pages/Afi";
import Dashboard from "../Layout/Dashboard";
import ConsonantesPulmonares from "../pages/Fonetica-Articulatoria/ConsonantesPulmonares";
import ConsonantesNoPulmonares from "../pages/Fonetica-Articulatoria/ConsonantesNoPulmonares";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="afi" element={<Afi />} />

        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        <Route path="fonetica-articulatoria" element={<Dashboard />}>
          <Route
            path="consonantes-pulmonares"
            element={<ConsonantesPulmonares />}
          />
          <Route
            path="consonantes-no-pulmonares"
            element={<ConsonantesNoPulmonares />}
          />
        </Route>

        {/* Sin no hay ninguna otra ruta */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
