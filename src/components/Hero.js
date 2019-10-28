import React from 'react'
import Img from 'gatsby-image'
import Plx from 'react-plx'
//import styles from './Hero.module.scss'

//import "./Hero.module.scss"

const Hero = props => {
  return (
    <div className="hero">
      <Plx
        parallaxData={[
          {
            start: 1,
            duration: '.hero',
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale"
              },
            ],
          },
        ]}
      >
        <Img
          className="hero__image"
          fluid={props.data.image.fluid}
          title={props.data.title}
        />
      </Plx>
    </div>
  )
}

export default Hero
