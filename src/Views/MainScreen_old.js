import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: 35,
    flex: 1,
  },
}));

const MainScreen = (props) => {
  const classes = useStyles();
  return <main className={classes.main}>{props.children}</main>
};

export default MainScreen;
