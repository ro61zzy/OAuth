/** @format */

import React from "react";
import jwt from "jsonwebtoken";
import "../App.css";
const Dashboard = () => {
  const token = localStorage.getItem("token");

  const userd = jwt.decode(token);

  console.log(userd);

  return (
    <div className="App">
      {" "}
      Welcome to Dashboard, <br />
      {userd.name}
    </div>
  );
};

export default Dashboard;
