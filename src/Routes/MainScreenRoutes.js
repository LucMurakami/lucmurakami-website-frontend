import React from "react";
import { Router } from "@reach/router";

import Home from "../Views/Home";
import MyProjects from "../Views/MyProjects";
import Interests from "../Views/Interests";
import BackendTemplate from "../Views/BackendTemplate";

const MainScreenRoutes = () => {
  return (
    <Router>
      <Home path="/" />
      <MyProjects path="myprojects" />
      <Interests path="interests" />
      <BackendTemplate path="backend" />
    </Router>
  );
}

export default MainScreenRoutes;
