import React from "react"
import SVG from '../SVG';
import Fade from 'react-reveal/Fade';


import './Social.scss'

const Social = ({social}) => {
  return (
    <Fade delay={750}>
      <div className="intro__social__root">
        <ul className="intro__social">
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
    </Fade>
  )
}

export default Social
