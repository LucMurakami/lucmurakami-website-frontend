import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const BackendTemplateScreen = ({data}) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.appBarSpacer} />
      {!data && <p>Loading...</p>}
      {data && <p>{data.text}</p>}
    </Container>
  );
};

export default BackendTemplateScreen;
