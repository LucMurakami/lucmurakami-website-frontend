import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Link,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    padding: 10,
  },
}));

const ControlledExpansionPanel = ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {data.map((interest, index) => {
        return (
          <ExpansionPanel
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography className={classes.heading}>
                {interest.title}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {interest.expansionPanelSummary}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <Typography variant="body1">{interest.description}</Typography>
                {interest.link && (
                  <div>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        window.open(data.link);
                      }}
                    >
                      {interest.linkDescription}
                    </Link>
                  </div>
                )}
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default ControlledExpansionPanel;
