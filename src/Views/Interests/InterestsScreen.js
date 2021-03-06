import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

import ControlledExpansionPanel from "../../Components/ControlledExpansionPanel";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    padding: 20,
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const InterestsScreen = ({ data }) => {
  const classes = useStyles();
  return (
    <Container className={classes.containerStyle}>
      <div className={classes.appBarSpacer} />
      <Typography variant="h2">My Interests</Typography>
      <ControlledExpansionPanel data={data} />
    </Container>
  );
};

export default InterestsScreen;
