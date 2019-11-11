import React from "react"
// import { StaticQuery, graphql } from 'gatsby'
import styles from './Social.module.scss'
import SVG from '../SVG';

class Social extends React.Component {
  render() {
    return (
      <div className={styles.intro__social__root}>
        <ul className={styles.intro__social}>
        {this.props.social.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.node.url} title={item.node.name} target="_blank" rel="noopener noreferrer">
                <SVG icon={`${item.node.icon}`} />
              </a>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}


export default Social
