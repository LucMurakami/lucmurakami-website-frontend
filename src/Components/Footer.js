import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import Banner from "../Images/banner.jpg";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: `url(${Banner})`,
    height: 500,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 1,
    width: "100%",
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className="App">

        <Container className={styles.banner}></Container>

      footer
    </footer>
  );
};

export default Footer;
