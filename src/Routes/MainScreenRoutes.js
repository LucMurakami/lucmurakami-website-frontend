import React from "react";
import { Router } from "@reach/router";

import Home from "../Views/Home";
import MyProjects from "../Views/MyProjects";
import Interests from "../Views/Interests";
import MotivationMicroservice from "../Views/MotivationMicroservice";

const MainScreenRoutes = () => {
  return (
    <Router>
      <Home path="/" />
      <MyProjects path="myprojects" />
      <Interests path="interests" />
      <MotivationMicroservice path="motivation" />
    </Router>
  );
}

export default MainScreenRoutes;
