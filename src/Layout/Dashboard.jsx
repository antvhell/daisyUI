import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-10 ">
      <h1 className="text-2xl">Fonética Articulatoria.</h1>

      <div className="tabs mt-10 inline-block align-middle">
        <Link to="consonantes-pulmonares" className="tab tab-bordered ">
          Consonantes pulmonares
        </Link>
        <Link to="consonantes-no-pulmonares" className="tab tab-bordered">
          Consonantes no pulmonares
        </Link>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
