import React from 'react';
import Fade from 'react-reveal/Fade';
import Hero from '../Hero';
import { FormattedMessage } from 'react-intl';
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
          <div>
            <h1 className={styles.fade__text}>
              <span>{props.header.title}</span>
              <span>{props.header.sectionTitle}</span>
            </h1>
          </div>
        </Fade>
        <Fade duration={2000} delay={800}>
          <ul className={`${styles.intro__cta} btn__group`}>
            <li>
              <a
                className='button jsSmoothScroll'
                href='#about'
                // title={`More ${<FormattedMessage id="aboutMe" />}`}
              >
                <FormattedMessage id="aboutMe" />
              </a>
            </li>
          </ul>
          </Fade>
      </div>
    </section>
  );
};

export default Header;
