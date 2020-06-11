import React from "react";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red, blue, green, yellow } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },
  img: {
    height: 50
  },
  expand: {
    transform: "rotate(0deg)",
    marginRight: 0,
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar1: {
    backgroundColor: red[500],
  },
  avatar2: {
    backgroundColor: blue[500],
  },
  avatar3: {
    backgroundColor: green[500],
  },
  avatar4: {
    backgroundColor: yellow[500],
  },
  showTechText: {
    marginLeft: "auto",
    paddingRight: 10,
  },
  collapseText: {
    margin: 0,
  },
  icon: {
    margin: 0,
  }
}));

const ComplexCard = ({
  index,
  data: {
    title,
    date,
    imagePath,
    cardTitle,
    description,
    projectGithubLink,
    projectScreenEndpoint = "/myprojects",
    techDescription,
  },
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const rotateColors = (cardIndex) => {
    const color = cardIndex % 4;

    switch (color) {
      case 0:
        return classes.avatar1;
      case 1:
        return classes.avatar2;
      case 2:
        return classes.avatar3;
      case 3:
        return classes.avatar4;
      default:
        return classes.avatar1;
    }
  };

  const avatar = (projectLink) => {
    if (projectLink) {
      return (
      <IconButton
        aria-label="github project link"
        onClick={() => window.open(projectLink)}
        className={classes.icon}
        size="small"
      >
        <GitHubIcon className={classes.icon} fontSize="large"/>
      </IconButton>
      )
    } else {
      return (
      <Avatar aria-label="project" className={rotateColors(index)}>
      L
    </Avatar>
    )
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          avatar(projectGithubLink)
          }
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={imagePath}
        title={cardTitle}
      />
      <CardContent>
        {!description && (
          <Typography variant="body2" color="textSecondary" component="p">
            Loading...
          </Typography>
        )}
        {description && (
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {projectGithubLink && (
          <IconButton
            aria-label="github project link"
            onClick={() => window.open(projectGithubLink)}
          >
            <GitHubIcon />
          </IconButton>
        )}
        {!projectGithubLink && (
          <IconButton disabled
          >
            <GitHubIcon style={{visibility: "hidden"}}/>
          </IconButton>
        )}
        <Button
          className={classes.showTechText}
          component={Link}
          to={projectScreenEndpoint}
        >
          Learn More
        </Button>
        <Button className={classes.showTechText} onClick={handleExpandClick}>
          Show tech
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show tech"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.collapseText} paragraph>
            Tech: {techDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ComplexCard;
