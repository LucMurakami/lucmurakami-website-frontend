import React from "react";
import { Grid, Paper, makeStyles, ButtonBase, Typography } from "@material-ui/core";

import Headshot from "../../Images/Headshot.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1500,
  },
  image: {
    padding: theme.spacing(2),
    width: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <div className={classes.appBarSpacer} />
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Grid key={0} item xs={12} md={6} >
            <Typography variant="h2">Who Am I?</Typography>
            <Typography>
              Hi! My name is Luc Murakami and I am a student currently studying
              at BCIT in the CST program. Curious in nature, and relentless in
              my work ethic, I want to learn everything there is to know about
              the technology field and cut out my own, unique path.
            </Typography>
            <br />
            <Typography>
              Previously, I went to UBC and graduated with a Bachelors of
              Science in Biology. During my time at UBC I was lucky enough to be
              involved in the co-op program and worked in the academic research
              field for a year. This was a year of self discovery and learning,
              and I am very thankful that I was able to experience living
              independantly. It was during this time that I started looking into
              coding as we were using macros to make work more efficient.
            </Typography>
            <br />
            <Typography>
              Computers have always been a topic of interest for me, even when I
              was a young child. I would also always take electronic devices
              apart to see how they worked on the inside, and I think this
              curiosity has followed me throughout my life. I know that if I
              don't understand something at first, the answer is just a few
              hours of investigation and experimentation away.
            </Typography>
            <br />
            <Typography>
              After my co-op experience I returned to school to finish my
              Bachelors. I felt it was important to finish what I had started,
              but I knew in my heart that programming and technology was where I
              really should be. Thus, after I graduated I went directly to BCIT
              to pursue a degree in Computer System Technology and I haven't
              looked back since.
            </Typography>
            <br />
            <Typography>Look out world, here I come!</Typography>
          </Grid>
          <Grid key={1} item xs={12} md={6}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="headshot"
                src={Headshot}
                id="headshot"
              />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default HomeScreen;
