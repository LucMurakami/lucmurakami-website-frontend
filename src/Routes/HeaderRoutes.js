import React from "react";
import { Router } from "@reach/router";

import Home from "../Views/Home/HomeView";
import MyProjects from "../Views/MyProjects";
import Coding4All from "../Views/Coding4All";
import Interests from "../Views/Interests";

const HeaderRoutes = () => {
  return (
    <Router>
      <Home path="/" />
      <MyProjects path="MyProjects" />
      <Coding4All path="Coding4All" />
      <Interests path="Interests" />
    </Router>
  );
}

export default HeaderRoutes;
