import React from 'react';
import Fade from 'react-reveal/Fade';
import Hero from '../Hero';
import styles from './index.module.scss';

import './header.scss';

const Header = props => {
  return (
    <section className={`${styles.intro} ${styles.introGradient}`}>
      <Hero data={props.header.modules[0]} />
      <div className={styles.intro__content}>
        <Fade duration={1000} delay={300}>
          <span className={styles.intro__msg}>{props.header.description}</span>
        </Fade>
        <Fade duration={2000} delay={400}>
          <h1>{props.header.title}</h1>
        </Fade>
        <Fade duration={1000} delay={500}>
          <p className={styles.intro__position}>{props.header.sectionTitle}</p>
        </Fade>
        <Fade duration={2000} delay={800}>
          <ul className={`${styles.intro__cta} btn__group`}>
            <li>
              <a
                className='button jsSmoothScroll'
                href='#about'
                title='More About Me'
              >
                About Me
              </a>
            </li>
          </ul>
          </Fade>
      </div>
    </section>
  );
};

export default Header;
