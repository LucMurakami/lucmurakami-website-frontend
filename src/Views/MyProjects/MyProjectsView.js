import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const MyProjectsView = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.appBarSpacer} />
      <p>This is MyProjectsScreen</p>
    </Container>
  );
};

export default MyProjectsView;
