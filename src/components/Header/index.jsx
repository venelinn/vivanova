import React from 'react';
import Fade from 'react-reveal/Fade';
//import { CSSTransition } from 'react-transition-group';
import Hero from '../Hero';
import Social from './Social';
import Menu from './Hamburger';
import styles from './index.module.scss';

import './header.scss';

const Header = props => {
  return (
    <section className={`${styles.intro} ${styles.introGradient}`}>
      <Hero data={props.header.modules[0]} />
      <div className={styles.intro__content}>
        <Fade duration={1000} delay={300}>
          <span className={styles.intro__msg}>{props.header.sectionTitle}</span>
        </Fade>
        <Fade duration={2000} delay={400}>
          <h1>{props.header.title}</h1>
        </Fade>
        <Fade duration={1000} delay={500}>
          <p className={styles.intro__position}>{props.header.description}</p>
        </Fade>
      </div>
      <Fade duration={1500} delay={1000}>
      <Social />
      </Fade>
      <Menu />
    </section>
  );
};

export default Header;
