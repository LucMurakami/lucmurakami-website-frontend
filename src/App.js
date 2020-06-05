import React from "react";
import { makeStyles } from "@material-ui/core";

import MainScreen from "./Components/MainScreen";
import MainScreenRoutes from "./Routes/MainScreenRoutes";
import Footer from "./Components/Footer";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "#F1F1F1",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <MainScreen>
        <MainScreenRoutes />
        <Footer />
      </MainScreen>
      
    </div>
  );
}

export default App;
