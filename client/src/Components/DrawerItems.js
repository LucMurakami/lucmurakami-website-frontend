import React, { useMemo, forwardRef } from "react";
import { Link } from "@reach/router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import SportsHockeyIcon from '@material-ui/icons/SportsHockey';

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const TemporaryDrawer = () => {

  return (
      <List>
        <ListItemLink to="/" primary="Home Page" icon={<HomeIcon />} />
        <ListItemLink
          to="MyProjects"
          primary="My Projects"
          icon={<CodeIcon />}
        />
        <ListItemLink to="Interests" primary="Interests" icon={<SportsHockeyIcon />} />
      </List>
  );
};

export default TemporaryDrawer;
