import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const InterestsView = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.appBarSpacer} />
      <p>This is the InterestsScreen</p>
    </Container>
  );
};

export default InterestsView;
