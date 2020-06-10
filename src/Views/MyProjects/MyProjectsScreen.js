import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

import ComplexCard from "../../Components/ComplexCard";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const MyProjectsScreen = ({data}) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.appBarSpacer} />
      <Typography variant="h2">My Projects</Typography>
      <a href="https://github.com/LucMurakami">
        <Typography>My GitHub Account</Typography>
      </a>
      {data.map((project) => {
        return <ComplexCard data={project} />;
      })}
    </Container>
  );
};

export default MyProjectsScreen;
