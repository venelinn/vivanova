import React from 'react';
import Hero from '../Hero';
import { FormattedMessage } from 'react-intl';
//import styles from './index.module.scss';

import './header.scss';

const Header = props => {
  const name = props.header.title.split(' ');
  return (
    <section className="intro intro--gradient">
      <Hero data={props.header.modules[0]} />
      <div className="intro__content">
          <span className="intro__msg">{props.header.description}</span>
          <div className="title__wrap">
            <h1>
            <span className="animation">
              <span className="first">{name[0]}</span>
              <span className="oh">
                <span className="second">{name[1]}</span>
              </span>
            </span>
              </h1>
          </div>

          <ul className="intro__cta btn__group">
            <li>
              <a
                className='button button--full jsSmoothScroll'
                href='#about'
                // title={`More ${<FormattedMessage id="aboutMe" />}`}
              >
                <FormattedMessage id="aboutMe" />
              </a>
            </li>
          </ul>

      </div>
    </section>
  );
};

export default Header;
