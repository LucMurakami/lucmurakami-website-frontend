import React, { useMemo, forwardRef } from "react";
import { Link } from "@reach/router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";


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
        <ListItemLink to="/" primary="Home Page" icon={<InboxIcon />} />
        <ListItemLink
          to="MyProjects"
          primary="My Projects"
          icon={<InboxIcon />}
        />
        <ListItemLink
          to="Coding4All"
          primary="Coding 4 All"
          icon={<InboxIcon />}
        />
        <ListItemLink to="Interests" primary="Interests" icon={<InboxIcon />} />
      </List>
  );
};

export default TemporaryDrawer;
