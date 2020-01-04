import React from "react"
import styles from './Social.module.scss'
import SVG from '../SVG';

const Social = ({social}) => {
  return (
    <div className={styles.intro__social__root}>
      <ul className={styles.intro__social}>
      {social.map((item, index) => {
        const file = item.node.file;
        const url = file ? item.node.file.file.url : item.node.url;
        const icon = file ? 'CV' : <SVG icon={`${item.node.icon}`} />
        return (
          <li key={index}>
            <a href={url} title={item.node.name} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Social
