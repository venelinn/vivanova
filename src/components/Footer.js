import React from "react"
import Fade from 'react-reveal/Fade';
import { FormattedMessage } from 'react-intl';
import classes from "./Footer.module.scss";

const Footer = () => (
  <footer className={classes.footer}>
    <Fade delay={300}>
      <div className={classes.copyright}>© {new Date().getFullYear()}, <FormattedMessage id="footerText" /></div>
    </Fade>
    {` `}
  </footer>
)

export default Footer

