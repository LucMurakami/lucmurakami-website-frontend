import React from "react";
import {
  Container,
  makeStyles,
  Paper,
  Typography,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  root: {
    paddingBottom: 20,
    minWidth: 300,
    margin: 20,
  },
  imgDiv: {
    textAlign: "center"
  },
  img: {
    width: "80%",
  }
}));

const MotivationMicroserviceScreen = ({ data }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.appBarSpacer} />
      <br />
      <Typography variant="h2">Daily Motivational Image!</Typography>
      <Paper className={classes.root}>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              {data && data.title}
              {!data && "Loading..."}
            </Typography>
          </Grid>
          <Grid item><div className={classes.imgDiv}>{data && <img src={data.image} alt="Motivation" className={classes.img} />}</div></Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary" component="p">
              Number of Upvotes: {data && data.upvotes}
              {!data && "Calculating..."}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                if (data) {
                  window.open(`https://www.reddit.com/${data.permalink}`)
                }
              }}
            >
              Go to Reddit
            </Button>
          </Grid>
          <Grid item>
            <Divider />
            <br />
            <Typography variant="body2" color="textSecondary" components="p" align="center">
              All information taken from highest upvoted post on r/getMotivated, a subreddit of reddit.com.{<br />}
              Idea credit to Enoch. All rights to image and title belong to owner of the original reddit post.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MotivationMicroserviceScreen;
