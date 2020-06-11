import React from "react";
import { Container, makeStyles, Typography, Grid, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import ComplexCard from "../../Components/ComplexCard";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  containerStyle: {
    padding: 20,
  },
  mainGitIcon:{
    margin: 0,
  }
}));

const MyProjectsScreen = ({ data }) => {
  const classes = useStyles();
  return (
    <Container className={classes.containerStyle}>
      <div className={classes.appBarSpacer} />
      <Grid container>
        <Grid item>
          <Typography variant="h2">My Projects</Typography>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="github project link"
            onClick={() => window.open("https://github.com/LucMurakami")}
          >
            <GitHubIcon fontSize="large" className={classes.mainGitIcon}/>
          </IconButton>
        </Grid>
      </Grid>
      <Container className={classes.containerStyle}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={4}
        >
          {data.map((project, index) => {
            return (
              <Grid item key={index}>
                <ComplexCard data={project} index={index} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};

export default MyProjectsScreen;
