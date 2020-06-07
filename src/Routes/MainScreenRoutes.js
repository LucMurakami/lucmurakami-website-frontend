import React from "react";
import { Router } from "@reach/router";

import Home from "../Views/Home";
import MyProjects from "../Views/MyProjects";
import Interests from "../Views/Interests";

const MainScreenRoutes = () => {
  return (
    <Router>
      <Home path="/" />
      <MyProjects path="MyProjects" />
      <Interests path="Interests" />
    </Router>
  );
}

export default MainScreenRoutes;
